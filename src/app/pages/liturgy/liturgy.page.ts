import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-liturgy',
  templateUrl: './liturgy.page.html',
  styleUrls: ['./liturgy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LiturgyPage {

  // primer carrusel 

  slidesLecturas  = [
    {
      image: 'assets/images/img1.jpg',
      title: 'Lucas 22, 7-20',
      subtitle: '26 de enero de 2025',
    },
    {
      image: 'assets/images/img2.jpg',
      title: 'Salmo 23, 1-6',
      subtitle: '27 de enero de 2025',
    },
    {
      image: 'assets/images/img3.jpg',
      title: 'Mateo 5, 1-12',
      subtitle: '28 de enero de 2025',
    },
    {
      image: 'assets/images/img4.jpg',
      title: 'Juan 14, 1-6',
      subtitle: '29 de enero de 2025',
    }
  ];

  // segundo carrusel 
  slidesEventos = [
    {
      image: 'assets/images/img1.jpg',
      title: 'Santo',
      },
    {
      image: 'assets/images/img2.jpg',
      title: 'Alabaré a Mi Señor',
     },
    {
      image: 'assets/images/img3.jpg',
      title: 'Hoy el Señor resucitó',
       },
    {
      image: 'assets/images/img4.jpg',
      title: 'Alabaré',
  }
  ];

  constructor() {}
}