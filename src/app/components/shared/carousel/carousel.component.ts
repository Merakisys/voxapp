// src/app/components/shared/carousel/carousel.component.ts
import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardComponent } from '../card/card.component';
import { CarouselItem } from '../../../models/carousel-item.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, CardComponent]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: CarouselItem[] = [];
  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 5000;

  currentIndex = 0;
  private autoPlayTimer?: any;
  private screenWidth = window.innerWidth;

  ngOnInit() {
    if (this.autoPlay && this.items.length > 1) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  getSlideWidth(): number {
    // Ancho de cada slide basado en el tamaño de pantalla
    if (this.screenWidth <= 480) {
      return 200; // Móvil pequeño
    } else if (this.screenWidth <= 768) {
      return 220; // Tablet
    } else {
      return 280; // Desktop
    }
  }

  nextSlide() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.restartAutoPlay();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.items.length - 1;
    }
    this.restartAutoPlay();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.restartAutoPlay();
  }

  private startAutoPlay() {
    this.autoPlayTimer = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayInterval);
  }

  private stopAutoPlay() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
      this.autoPlayTimer = undefined;
    }
  }

  private restartAutoPlay() {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
}