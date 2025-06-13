import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Cancion {
  nombre: string;
  tipo: string;
  descripcion: string;
  imageUrl: string;
}

export interface RepertorioDetalle {
  nombre: string;
  tiempoLiturgico: string;
  canciones: Cancion[];
}

@Injectable({
  providedIn: 'root'
})
export class RepertorioService {
  private repertoriosGuardados: RepertorioDetalle[] = [];
  private repertorioSeleccionado = new BehaviorSubject<RepertorioDetalle | null>(null);

  guardarRepertorio(repertorio: RepertorioDetalle) {
    this.repertoriosGuardados.push(repertorio);
  }

  seleccionarRepertorio(nombre: string) {
    const repertorio = this.repertoriosGuardados.find(r => r.nombre === nombre);
    this.repertorioSeleccionado.next(repertorio || null);
  }

  getRepertorioSeleccionado() {
    return this.repertorioSeleccionado.asObservable();
  }
}
