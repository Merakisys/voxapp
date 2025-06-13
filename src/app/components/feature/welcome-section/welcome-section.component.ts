// src/app/components/feature/welcome-section/welcome-section.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/carousel/carousel.component';
import { CarouselItem } from '../../../models/carousel-item.interface';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss'],
  standalone: true,
  imports: [CommonModule, CarouselComponent]
})
export class WelcomeSectionComponent implements OnInit {
  welcomeItems: CarouselItem[] = [];

  ngOnInit() {
    this.loadWelcomeItems();
  }

  private loadWelcomeItems() {
    // Datos mock - después puedes cambiar esto por un servicio
    this.welcomeItems = [
      {
        id: '1',
        title: 'Huracán ',
        subtitle: 'Hakuna Group',
        image: 'assets/images/huracan_hakuna.jpg'
      },
      {
        id: '2',
        title: 'El ALfarero',
        subtitle: 'Hermana Glenda',
        image: 'assets/images/hermana_Glenda.jpeg'
      },
      {
        id: '3',
        title: 'Oh luz del mundo',
        subtitle: 'Rey de Reyes kids',
        image: 'assets/images/rey_de_Reyes.jpg'
      },
      {
        id: '4',
        title: 'A los pies del Rey',
        subtitle: 'Jose Luis Melgar',
        image: 'assets/images/a_los_pies_del_Rey.jpg'
      },
      {
        id: '5',
        title: 'A los pies del Rey',
        subtitle: 'Jose Luis Melgar',
        image: 'assets/images/a_los_pies_del_Rey.jpg'
      },
      {
        id: '5',
        title: 'A los pies del Rey',
        subtitle: 'Jose Luis Melgar',
        image: 'assets/images/a_los_pies_del_Rey.jpg'
      },
      {
        id: '5',
        title: 'A los pies del Rey',
        subtitle: 'Jose Luis Melgar',
        image: 'assets/images/a_los_pies_del_Rey.jpg'
      },
      {
        id: '5',
        title: 'A los pies del Rey',
        subtitle: 'Jose Luis Melgar',
        image: 'assets/images/a_los_pies_del_Rey.jpg'
      },
      {
        id: '5',
        title: 'A los pies del Rey',
        subtitle: 'Jose Luis Melgar',
        image: 'assets/images/a_los_pies_del_Rey.jpg'
      }
    ];
  }
}
