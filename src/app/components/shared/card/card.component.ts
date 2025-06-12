// src/app/components/shared/card/card.component.ts
import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { CarouselItem } from '../../../models/carousel-item.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonImg]
})
export class CardComponent {
  @Input() item!: CarouselItem;
}