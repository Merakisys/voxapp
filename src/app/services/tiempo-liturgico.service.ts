import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiempoLiturgicoService {
  public detectarTiempoLiturgico(fecha: Date): string {
    // ...Copiar aquí toda la lógica del método detectarTiempoLiturgico de CrearRepertorioPage...
    // Incluyendo las funciones auxiliares como addDays, getEasterSunday, etc.
    return 'Tiempo Ordinario'; // Valor por defecto
  }
}
