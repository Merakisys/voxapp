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

  // Carrusel 1: Lecturas del Día
  slidesLecturas = [
    { image: 'assets/images/img1.jpg', title: 'Lucas 22, 7-20', subtitle: '26 de enero de 2025' },
    { image: 'assets/images/img2.jpg', title: 'Salmo 23, 1-6', subtitle: '27 de enero de 2025' },
    { image: 'assets/images/img3.jpg', title: 'Mateo 5, 1-12', subtitle: '28 de enero de 2025' },
    { image: 'assets/images/img4.jpg', title: 'Juan 14, 1-6', subtitle: '29 de enero de 2025' }
  ];

  // Carrusel 2: Liturgia Musical
  slidesEventos = [
    { image: 'assets/images/img1.jpg', title: 'Santo', subtitle: 'Canto Litúrgico – 26 de enero de 2025' },
    { image: 'assets/images/img2.jpg', title: 'Alabaré a Mi Señor', subtitle: 'Canto Litúrgico – 27 de enero de 2025' },
    { image: 'assets/images/img3.jpg', title: 'Hoy el Señor resucitó', subtitle: 'Canto Litúrgico – 28 de enero de 2025' },
    { image: 'assets/images/img4.jpg', title: 'Alabaré', subtitle: 'Canto Litúrgico – 29 de enero de 2025' }
  ];

  // Carrusel 3: Actividades Eclesiales
  slidesActividades = [
    { image: 'assets/images/img5.jpg', title: 'Misa de niños', subtitle: '14 de enero de 2025' },
    { image: 'assets/images/img6.jpg', title: 'Catequesis', subtitle: '10 de enero de 2025' },
    { image: 'assets/images/img7.jpg', title: 'Confirmación', subtitle: '12 de enero de 2025' },
    { image: 'assets/images/img8.jpg', title: 'Rosario juvenil', subtitle: '11 de enero de 2025' }
  ];

  // Carrusel 4: Cantos
  slidesCantos = [
    { image: 'assets/images/img9.jpg', title: 'Santo, santo', subtitle: 'Autor: Mario Durán' },
    { image: 'assets/images/img10.jpg', title: 'Pescador de Hombres', subtitle: 'Autor: Cesáreo Gabaráin' },
    { image: 'assets/images/img11.jpg', title: 'Alma misionera', subtitle: 'Autor: Anónimo' },
    { image: 'assets/images/img12.jpg', title: 'Ven Espíritu Santo', subtitle: 'Autor: Desconocido' }
  ];

  constructor() {}
}