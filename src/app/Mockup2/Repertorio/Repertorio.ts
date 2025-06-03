import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repertorio',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './Repertorio.html',
  styleUrls: [
    './style.css',
    './styleguide.css',
    './globals.css'
  ],
})
export class RepertorioPage {
  constructor(private router: Router) {}

}
