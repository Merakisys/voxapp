import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContainerVerticalComponent } from 'src/app/components/containers/Container Vertical/containerVertical';
import { ContainerHorizontalComponent } from 'src/app/components/containers/Container Horizontal/containerHorizontal';
import { TiempoLiturgicoService } from '../../../services/tiempo-liturgico.service';
import { RepertorioService, RepertorioDetalle } from '../../../services/repertorio.service';

/** Utilidades de fecha ---------------------------------------------- */
const MS_PER_DAY = 86_400_000;

/** Resta (o suma) días a una fecha */
function addDays(d: Date, days: number): Date {
  if (!d || isNaN(d.getTime())) {
    throw new Error('Fecha inválida proporcionada');
  }
  return new Date(d.getTime() + days * MS_PER_DAY);
}

/** Algoritmo gregoriano anónimo para la Pascua */
function getEasterSunday(year: number): Date {
  if (year < 1583) {
    throw new Error('El cálculo de Pascua solo es válido para años posteriores a 1582 (calendario gregoriano)');
  }
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3 = marzo, 4 = abril
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day); // JS: 0-enero
}

/** Primer domingo de Adviento (domingo entre 27-nov y 3-dic) */
function getFirstAdventSunday(year: number): Date {
  const nov27 = new Date(year, 10, 27); // 27-nov
  const dayOfWeek = nov27.getDay();
  const daysUntilSunday = (7 - dayOfWeek) % 7; // Días hasta el próximo domingo
  const firstAdvent = addDays(nov27, daysUntilSunday);
  if (firstAdvent.getMonth() === 11 && firstAdvent.getDate() > 3) {
    throw new Error('El primer domingo de Adviento debe estar entre 27-nov y 3-dic');
  }
  return firstAdvent;
}

/** Último domingo antes de Adviento = Cristo Rey */
function getChristKingSunday(year: number): Date {
  const advent = getFirstAdventSunday(year);
  const christKing = addDays(advent, -7);
  if (christKing.getDay() !== 0) {
    throw new Error('Error en el cálculo: Cristo Rey debe ser un domingo');
  }
  return christKing;
}

/** Bautismo del Señor = domingo después del 6-ene (o lunes si el 6-ene es domingo) */
function getBaptismOfTheLord(year: number): Date {
  const jan06 = new Date(year, 0, 6);
  if (jan06.getDay() === 0) {
    // En algunos ritos, si el 6 de enero es domingo, el Bautismo es el lunes
    return new Date(year, 0, 7);
  }
  const offset = (7 - jan06.getDay()) % 7;
  return addDays(jan06, offset);
}

/** Componente -------------------------------------------------------- */
@Component({
  selector: 'app-crear-repertorio',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ContainerVerticalComponent,
    ContainerHorizontalComponent
  ],
  providers: [CrearRepertorioPage], // Añadir esto
  templateUrl: './CrearRepertorio.html',
  styleUrls: ['./style.css', './styleguide.css', './globals.css']
})
export class CrearRepertorioPage implements OnInit {
  /* ---------------- Propiedades de UI ---------------- */
  nombreRepertorio = '';
  mostrarTiempo = false;
  mostrarEntrada = false;
  mostrarContainer = false;

  seleccionadoTiempo = '';
  seleccionadoEntrada = 'Cantos de Entrada';
  cantosParaMostrar: string[] = [];

  containerPosition = { top: '0px', left: '0px' };

  /* ---------------- Datos base ----------------------- */
  readonly tiemposLiturgicos: string[] = [
    'Adviento', 'Navidad', 'Cuaresma', 'Domingo de Ramos', 'Jueves Santo',
    'La Resurrección del Señor', 'Pascua', 'Pentecostés',
    'Tiempo Ordinario', 'Cristo Rey', 'Fiestas de Precepto'
  ];

  readonly cantosPorTiempo: { [tiempo: string]: string[] } = {
    'Adviento': ['Entrada', 'Piedad', 'Aleluya', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'],
    'Navidad': ['Entrada', 'Piedad', 'Gloria', 'Aleluya', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'],
    'Cuaresma': ['Entrada', 'Piedad', 'Honor y gloria a ti Señor Jesús', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'],
    'Domingo de Ramos': ['Entrada', 'Canto para bendición de los ramos', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'],
    'Jueves Santo': [
      'Entrada', 'Piedad', 'Gloria', 'Honor y gloria',
      'Canto para el lavatorio de pies',
      'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión',
      'Canto para repartir el pan bendito', 'Salida'
    ],
    'La Resurrección del Señor': [
      'Pregón pascual', '7 salmos', 'Gloria', 'Aleluya',
      'Bendición y aspersión del agua bendita',
      'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'
    ],
    'Pascua': [
      'Entrada', 'Bendición y aspersión del agua bendita o piedad',
      'Gloria', 'Aleluya', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'
    ],
    'Pentecostés': ['Entrada', 'Piedad', 'Gloria', 'Aleluya', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'],
    'Tiempo Ordinario': ['Entrada', 'Piedad', 'Gloria', 'Aleluya', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'],
    'Cristo Rey': ['Entrada', 'Piedad', 'Gloria', 'Aleluya', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida'],
    'Fiestas de Precepto': ['Entrada', 'Piedad', 'Gloria', 'Aleluya', 'Ofertorio', 'Santo', 'Cordero de Dios', 'Comunión', 'Salida']
  };

  constructor(
    private router: Router,
    private tiempoLiturgicoService: TiempoLiturgicoService,
    private repertorioService: RepertorioService  // Añadir esta línea
  ) { }

  /* ---------------- Ciclo de vida -------------------- */
  ngOnInit(): void {
    const hoy = new Date();
    this.seleccionadoTiempo = this.tiempoLiturgicoService.detectarTiempoLiturgico(hoy);
    this.cantosParaMostrar = this.cantosPorTiempo[this.seleccionadoTiempo] || [];
  }

  /* ---------------- Lógica de tiempo litúrgico ------- */
  private detectarTiempoLiturgico(fecha: Date): string {
    if (!fecha || isNaN(fecha.getTime())) {
      throw new Error('Fecha inválida proporcionada');
    }

    const y = fecha.getFullYear();
    // Determinar el año litúrgico (comienza en el Primer Domingo de Adviento del año anterior)
    const adventStart = getFirstAdventSunday(y);
    const liturgicalYear = fecha >= adventStart ? y : y - 1;

    const easter = getEasterSunday(liturgicalYear);
    const ashWednesday = addDays(easter, -46);
    const palmSunday = addDays(easter, -7);
    const holyThursday = addDays(easter, -3);
    const easterMonday = addDays(easter, 1);
    const ascension = addDays(easter, 40); // Ascensión (puede variar: jueves o domingo)
    const pentecost = addDays(easter, 49);
    const corpusChristi = addDays(easter, 60); // Corpus Christi (puede variar: jueves o domingo)
    const adventNext = getFirstAdventSunday(liturgicalYear + 1);
    const christKing = getChristKingSunday(liturgicalYear);
    const christmasStart = new Date(liturgicalYear, 11, 25);
    const baptism = getBaptismOfTheLord(liturgicalYear + 1); // Enero del año siguiente

    /* 1- Domingos y días singulares */
    if (this.isSameDay(fecha, palmSunday)) return 'Domingo de Ramos';
    if (this.isSameDay(fecha, holyThursday)) return 'Jueves Santo';
    if (this.isSameDay(fecha, easter)) return 'La Resurrección del Señor';
    if (this.isSameDay(fecha, pentecost)) return 'Pentecostés';
    if (this.isSameDay(fecha, christKing)) return 'Cristo Rey';

    /* 2- Fiestas de Precepto (solemnidades específicas) */
    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    const fiestasDePrecepto = [
      { mes: 0, dia: 1 }, // Solemnidad de María
      { mes: 7, dia: 15 }, // Asunción
      { mes: 10, dia: 1 }, // Todos los Santos
      { mes: 11, dia: 8 }, // Inmaculada Concepción
      { mes: ascension.getMonth(), dia: ascension.getDate() }, // Ascensión
      { mes: corpusChristi.getMonth(), dia: corpusChristi.getDate() } // Corpus Christi
    ];
    if (fiestasDePrecepto.some(f => mes === f.mes && dia === f.dia)) {
      return 'Fiestas de Precepto';
    }

    /* 3- Rango de Adviento */
    if (fecha >= adventStart && fecha < christmasStart) return 'Adviento';

    /* 4- Rango de Navidad (25-dic a Bautismo del Señor) */
    if (fecha >= christmasStart && fecha <= baptism) return 'Navidad';

    /* 5- Cuaresma (desde Miércoles de Ceniza hasta < Domingo de Ramos) */
    if (fecha >= ashWednesday && fecha < palmSunday) return 'Cuaresma';

    /* 6- Tiempo Pascual (lunes de Pascua hasta < Pentecostés) */
    if (fecha >= easterMonday && fecha < pentecost) return 'Pascua';

    /* 7- Tiempo Ordinario (dos bloques: después de Bautismo hasta Miércoles de Ceniza, y después de Pentecostés hasta Adviento) */
    if ((fecha > baptism && fecha < ashWednesday) || (fecha > pentecost && fecha < adventNext)) {
      return 'Tiempo Ordinario';
    }

    /* Si no se encuentra un tiempo litúrgico, lanzar error para depuración */
    throw new Error('No se pudo determinar el tiempo litúrgico para la fecha proporcionada');
  }

  private isSameDay(a: Date, b: Date): boolean {
    if (!a || !b || isNaN(a.getTime()) || isNaN(b.getTime())) {
      throw new Error('Fechas inválidas para comparación');
    }
    return a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  }

  /* ---------------- Métodos de UI -------------------- */
  toggleTiempo() {
    this.mostrarTiempo = !this.mostrarTiempo;
    this.mostrarEntrada = false;
  }

  toggleEntrada() {
    this.mostrarEntrada = !this.mostrarEntrada;
    this.mostrarTiempo = false;
  }

  seleccionarTiempo(tiempo: string) {
    this.seleccionadoTiempo = tiempo;
    this.mostrarTiempo = false;
    this.cantosParaMostrar = this.cantosPorTiempo[tiempo] || [];
  }

  seleccionarEntrada(canto: string) {
    this.seleccionadoEntrada = canto;
    this.mostrarEntrada = false;
  }

  volverARepertorio() {
    this.router.navigate(['/mockup2/repertorio']);
  }

  hasItems: boolean = false;

  @ViewChild(ContainerHorizontalComponent) horizontalContainer!: ContainerHorizontalComponent;
  @ViewChild(ContainerVerticalComponent) verticalContainer!: ContainerVerticalComponent;

  // Agregar la propiedad selectedSong
  selectedSong?: {
    name: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    isSelected: boolean;
  };

  onItemToggled(event: any) {
    this.mostrarContainer = true;
    this.selectedSong = event.cancion;
    
    this.containerPosition = {
      top: '493px',
      left: '24px'
    };

    // Verificar items después de agregar uno nuevo
    setTimeout(() => this.checkHasItems(), 0);
  }

  onItemRemoved(subtitle: string) {
    if (this.verticalContainer) {
      this.verticalContainer.unselectItem(subtitle);
      
      // Verificar items después de remover uno
      setTimeout(() => {
        if (this.horizontalContainer) {
          this.hasItems = this.horizontalContainer.items.length > 0;
          this.mostrarContainer = this.hasItems;
        }
      }, 0);
    }
  }

  checkHasItems() {
    if (this.horizontalContainer) {
      this.hasItems = this.horizontalContainer.items.length > 0;
    } else {
      this.hasItems = false;
    }
  }

  limpiarFormulario() {
    // Limpieza básica
    this.nombreRepertorio = '';
    this.hasItems = false;
    this.mostrarContainer = false;

    // Limpiar contenedor horizontal
    if (this.horizontalContainer) {
      this.horizontalContainer.items = [];
    }

    // Limpiar contenedor vertical
    if (this.verticalContainer) {
      this.verticalContainer.reset(); // Usamos el nuevo método
    }
  }

  anadirRepertorio() {
    if (!this.hasItems || !this.nombreRepertorio.trim()) return;

    const nuevoRepertorio: RepertorioDetalle = {
      nombre: this.nombreRepertorio,
      tiempoLiturgico: this.seleccionadoTiempo,
      canciones: this.horizontalContainer.items.map(item => ({
        nombre: item.subtitle,
        tipo: item.name,
        descripcion: item.description,
        imageUrl: item.imageUrl
      }))
    };

    // Guardar en el servicio
    this.repertorioService.guardarRepertorio(nuevoRepertorio);

    this.router.navigate(['/mockup2/repertorio'], {
      queryParams: {
        nuevoRepertorio: this.nombreRepertorio,
        tiempoLiturgico: this.seleccionadoTiempo
      }
    }).then(() => {
      this.limpiarFormulario();
      if (this.verticalContainer) {
        this.verticalContainer.ngOnInit();
      }
    });
  }
}