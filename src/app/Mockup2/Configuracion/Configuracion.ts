import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule,
    FormsModule
  ],
  templateUrl: './Configuracion.html',
  styleUrls: [
    './style.css',
    './styleguide.css',
    './globals.css'
  ],
})
export class ConfiguracionPage {
  nombre: string = 'Luis Baldiviezo';
  email: string = 'luis_baldiviezo@gmail.com';
  modalEditar: boolean = false;
  nuevoNombre: string = '';
  nuevoEmail: string = '';

  constructor(private router: Router) {}

  abrirModalEditar() {
    this.nuevoNombre = this.nombre;
    this.nuevoEmail = this.email;
    this.modalEditar = true;
  }

  cerrarModalEditar() {
    this.modalEditar = false;
  }

  actualizarPerfil() {
    this.nombre = this.nuevoNombre;
    this.email = this.nuevoEmail;
    this.cerrarModalEditar();
  }
}