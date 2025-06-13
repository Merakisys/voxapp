import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { BusquedaComponent } from 'src/app/components/search/busqueda';
import { CrearRepertorioPage } from './CrearRepertorio/CrearRepertorio';
import { TiempoLiturgicoService } from 'src/app/services/tiempo-liturgico.service';
import { RepertorioService } from 'src/app/services/repertorio.service';

interface Repertorio {
  nombre: string;
  tiempoLiturgico: string;
}

@Component({
  selector: 'app-repertorio',
  standalone: true,
  imports: [CommonModule, IonicModule, BusquedaComponent,BusquedaComponent],
  templateUrl: './Repertorio.html',
  styleUrls: [
    './style.css',
    './styleguide.css',
    './globals.css'
  ],
})
export class RepertorioPage implements OnInit {
  repertorios: Repertorio[] = [];
  repertoriosFiltrados: Repertorio[] = [];
  tiempoSeleccionado: string = '';
  mostrarTiempos: boolean = false;
  mostrarTodosSinFiltro: boolean = false;

  readonly tiemposLiturgicos: string[] = [
    'Todos', // Añadimos opción para mostrar todos
    'Adviento', 'Navidad', 'Cuaresma', 'Domingo de Ramos', 
    'Jueves Santo', 'La Resurrección del Señor', 'Pascua', 
    'Pentecostés', 'Tiempo Ordinario', 'Cristo Rey', 
    'Fiestas de Precepto'
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tiempoLiturgicoService: TiempoLiturgicoService,
    private repertorioService: RepertorioService
  ) {}

  ngOnInit() {
    // Establecer el tiempo litúrgico actual por defecto usando el servicio
    this.tiempoSeleccionado = this.tiempoLiturgicoService.detectarTiempoLiturgico(new Date());

    this.route.queryParams.subscribe(params => {
      if (params['nuevoRepertorio']) {
        const tiempoLiturgico = params['tiempoLiturgico'] || this.tiempoSeleccionado;
        this.addRepertorio(params['nuevoRepertorio'], tiempoLiturgico);
        
        // Limpiamos los parámetros
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: {},
          replaceUrl: true
        });
      }
      this.filtrarRepertorios();
    });
  }

  // Método para agregar nuevo repertorio
  addRepertorio(nombre: string, tiempoLiturgico: string) {
    if (nombre && !this.repertorios.some(r => r.nombre === nombre)) {
      this.repertorios.unshift({ nombre, tiempoLiturgico });
      this.filtrarRepertorios();
    }
  }

  filtrarRepertorios() {
    console.log('Tiempo seleccionado:', this.tiempoSeleccionado);
    console.log('Repertorios disponibles:', this.repertorios);
    
    if (this.tiempoSeleccionado === 'Todos') {
      this.repertoriosFiltrados = [...this.repertorios];
    } else {
      this.repertoriosFiltrados = this.repertorios.filter(r => 
        r.tiempoLiturgico === this.tiempoSeleccionado
      );
    }
    console.log('Repertorios filtrados:', this.repertoriosFiltrados);
  }

  toggleTiempos() {
    this.mostrarTiempos = !this.mostrarTiempos;
  }

  seleccionarTiempo(tiempo: string) {
    this.tiempoSeleccionado = tiempo;
    this.mostrarTiempos = false;
    this.filtrarRepertorios();
  }

  crearRepertorio() {
    this.router.navigate(['/repertories2/repertorio/crear']);
  }

  // Método para manejar la búsqueda
  onSearchChange(searchTerm: string) {
    if (!searchTerm) {
      this.filtrarRepertorios();
    } else {
      const filtered = !this.tiempoSeleccionado || this.tiempoSeleccionado === 'Todos' ? 
        this.repertorios :
        this.repertorios.filter(r => r.tiempoLiturgico.toLowerCase() === this.tiempoSeleccionado.toLowerCase());

      this.repertoriosFiltrados = filtered.filter(r => 
        r.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  irAHome() {
    this.router.navigate(['/tabs/home']);
  }

  verRepertorio(repertorio: Repertorio) {
    this.repertorioService.seleccionarRepertorio(repertorio.nombre);
    this.router.navigate(['/repertories2/repertorio/lista']);
  }
}
