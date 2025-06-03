import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-repertorio',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './ListaRepertorio.html',
  styleUrls: [
    './style.css',
    './styleguide.css',
    './globals.css'
  ],
})
export class ListaRepertorioPage {
  constructor(private router: Router) {}

}
