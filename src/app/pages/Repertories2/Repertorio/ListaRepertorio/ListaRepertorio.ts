import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RepertorioService, RepertorioDetalle } from 'src/app/services/repertorio.service';

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
export class ListaRepertorioPage implements OnInit {
  repertorio: RepertorioDetalle | null = null;

  constructor(
    private router: Router,
    private repertorioService: RepertorioService
  ) {}

  ngOnInit() {
    this.repertorioService.getRepertorioSeleccionado().subscribe(
      repertorio => {
        console.log('Repertorio recibido:', repertorio); // Para depuración
        this.repertorio = repertorio;
      }
    );
  }

  volverARepertorio() {
    this.router.navigate(['/repertories2/repertorio']);
  }
}
