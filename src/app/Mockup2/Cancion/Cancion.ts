import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './Cancion.html',
  styleUrls: [
    './style.css',
    './styleguide.css',
    './globals.css'
  ],
})
export class CancionPage {
  constructor(private router: Router) {}

}
