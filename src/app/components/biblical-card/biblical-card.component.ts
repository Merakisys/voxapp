// src/app/components/bible-card/bible-card.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bible-card',
  templateUrl: './biblical-card.component.html',
  styleUrls: ['./biblical-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class BiblicalCardComponent {
  @Input() backgroundImage: string = '';
  @Input() bibleReference: string = '';
  @Input() showCurrentDate: boolean = true;

  @Output() cardClick = new EventEmitter<void>();

  constructor() { }

  getCurrentDate(): string {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {  
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return today.toLocaleDateString('es-ES', options);
  }

  onCardClick(): void {
    this.cardClick.emit();
  }

}