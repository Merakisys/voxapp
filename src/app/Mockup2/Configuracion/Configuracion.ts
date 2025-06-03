import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './Configuracion.html',
  styleUrls: [
    './style.css',
    './styleguide.css',
    './globals.css'
  ],
})
export class ConfiguracionPage {
  constructor(private router: Router) {}

}
