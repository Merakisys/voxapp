// src/app/components/shared/carousel/carousel.component.ts
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { CarouselItem } from '../../../models/carousel-item.interface';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, IonButton, IonIcon, CardComponent]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() autoPlay: boolean = true;
  @Input() autoPlayInterval: number = 4000;

  currentIndex = 0;
  private autoPlayTimer?: number;

  constructor() {
    addIcons({ chevronBackOutline, chevronForwardOutline });
  }

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.resetAutoPlay();
  }

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.items.length - 1 : this.currentIndex - 1;
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.resetAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayTimer = window.setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  private resetAutoPlay() {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  getTransformStyle() {
    return `translateX(-${this.currentIndex * 266}px)`;
  }
}