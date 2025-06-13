import { Injectable } from '@angular/core';

const MS_PER_DAY = 86_400_000;

function addDays(d: Date, days: number): Date {
  if (!d || isNaN(d.getTime())) {
    throw new Error('Fecha inválida proporcionada');
  }
  return new Date(d.getTime() + days * MS_PER_DAY);
}

function getEasterSunday(year: number): Date {
  if (year < 1583) {
    throw new Error('El cálculo de Pascua solo es válido para años posteriores a 1582');
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
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function getFirstAdventSunday(year: number): Date {
  const nov27 = new Date(year, 10, 27);
  const dayOfWeek = nov27.getDay();
  const daysUntilSunday = (7 - dayOfWeek) % 7;
  const firstAdvent = addDays(nov27, daysUntilSunday);
  if (firstAdvent.getMonth() === 11 && firstAdvent.getDate() > 3) {
    throw new Error('El primer domingo de Adviento debe estar entre 27-nov y 3-dic');
  }
  return firstAdvent;
}

function getChristKingSunday(year: number): Date {
  const advent = getFirstAdventSunday(year);
  const christKing = addDays(advent, -7);
  if (christKing.getDay() !== 0) {
    throw new Error('Error en el cálculo: Cristo Rey debe ser un domingo');
  }
  return christKing;
}

function getBaptismOfTheLord(year: number): Date {
  const jan06 = new Date(year, 0, 6);
  if (jan06.getDay() === 0) {
    return new Date(year, 0, 7);
  }
  const offset = (7 - jan06.getDay()) % 7;
  return addDays(jan06, offset);
}

@Injectable({
  providedIn: 'root'
})
export class TiempoLiturgicoService {
  private isSameDay(a: Date, b: Date): boolean {
    if (!a || !b || isNaN(a.getTime()) || isNaN(b.getTime())) {
      throw new Error('Fechas inválidas para comparación');
    }
    return a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate();
  }

  public detectarTiempoLiturgico(fecha: Date): string {
    if (!fecha || isNaN(fecha.getTime())) {
      throw new Error('Fecha inválida proporcionada');
    }

    const y = fecha.getFullYear();
    const adventStart = getFirstAdventSunday(y);
    const liturgicalYear = fecha >= adventStart ? y : y - 1;

    const easter = getEasterSunday(liturgicalYear);
    const ashWednesday = addDays(easter, -46);
    const palmSunday = addDays(easter, -7);
    const holyThursday = addDays(easter, -3);
    const easterMonday = addDays(easter, 1);
    const ascension = addDays(easter, 40);
    const pentecost = addDays(easter, 49);
    const corpusChristi = addDays(easter, 60);
    const adventNext = getFirstAdventSunday(liturgicalYear + 1);
    const christKing = getChristKingSunday(liturgicalYear);
    const christmasStart = new Date(liturgicalYear, 11, 25);
    const baptism = getBaptismOfTheLord(liturgicalYear + 1);

    if (this.isSameDay(fecha, palmSunday)) return 'Domingo de Ramos';
    if (this.isSameDay(fecha, holyThursday)) return 'Jueves Santo';
    if (this.isSameDay(fecha, easter)) return 'La Resurrección del Señor';
    if (this.isSameDay(fecha, pentecost)) return 'Pentecostés';
    if (this.isSameDay(fecha, christKing)) return 'Cristo Rey';

    const mes = fecha.getMonth();
    const dia = fecha.getDate();
    const fiestasDePrecepto = [
      { mes: 0, dia: 1 },
      { mes: 7, dia: 15 },
      { mes: 10, dia: 1 },
      { mes: 11, dia: 8 },
      { mes: ascension.getMonth(), dia: ascension.getDate() },
      { mes: corpusChristi.getMonth(), dia: corpusChristi.getDate() }
    ];
    if (fiestasDePrecepto.some(f => mes === f.mes && dia === f.dia)) {
      return 'Fiestas de Precepto';
    }

    if (fecha >= adventStart && fecha < christmasStart) return 'Adviento';
    if (fecha >= christmasStart && fecha <= baptism) return 'Navidad';
    if (fecha >= ashWednesday && fecha < palmSunday) return 'Cuaresma';
    if (fecha >= easterMonday && fecha < pentecost) return 'Pascua';
    if ((fecha > baptism && fecha < ashWednesday) || (fecha > pentecost && fecha < adventNext)) {
      return 'Tiempo Ordinario';
    }

    throw new Error('No se pudo determinar el tiempo litúrgico para la fecha proporcionada');
  }
}
