// src/app/components/shared/card/card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CarouselItem } from '../../../models/carousel-item.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class CardComponent {
  @Input() item!: CarouselItem;
  @Output() cardClick = new EventEmitter<CarouselItem>();

  onCardClick() {
    this.cardClick.emit(this.item);
  }
}