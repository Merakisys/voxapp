import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-repertorio',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './CrearRepertorio.html',
  styleUrls: [
    './style.css',
    './styleguide.css',
    './globals.css'
  ],
})
export class CrearRepertorioPage {
  constructor(private router: Router) {}

}
