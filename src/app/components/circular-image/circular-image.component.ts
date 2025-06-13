import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circular-image',
  standalone: true,
  imports: [IonicModule, CommonModule],
  template: `
    <div 
      class="circular-container"
      [style.width.px]="size"
      [style.height.px]="size"
      [style.background-image]="imageUrl ? 'url(' + imageUrl + ')' : 'none'"
      [class.has-image]="imageUrl"
      (click)="onCircleClick()"
    >
      <!-- Ícono por defecto cuando no hay imagen -->
      <ion-icon 
        *ngIf="!imageUrl" 
        [name]="defaultIcon" 
        [style.font-size.px]="size * 0.4">
      </ion-icon>
      
      <!-- Overlay opcional -->
      <div class="overlay" *ngIf="showOverlay">
        <ion-icon name="camera-outline" size="small"></ion-icon>
      </div>
    </div>
  `,
  styles: [`
    .circular-container {
      border-radius: 50%;
      background-color: var(--ion-color-light);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      border: 2px solid var(--ion-color-medium);
    }

    .circular-container:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .circular-container.has-image {
      border-color: var(--ion-color-primary);
    }

    .circular-container ion-icon {
      color: var(--ion-color-medium);
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .circular-container:hover .overlay {
      opacity: 1;
    }

    .overlay ion-icon {
      color: white;
    }
  `]
})
export class CircularImageComponent {
  @Input() size: number = 100; // Tamaño del círculo en píxeles
  @Input() imageUrl: string = ''; // URL de la imagen
  @Input() defaultIcon: string = 'person-outline'; // Ícono por defecto
  @Input() showOverlay: boolean = true; // Mostrar overlay al hacer hover
  
  @Output() circleClick = new EventEmitter<void>(); // Evento de click

  onCircleClick(): void {
    this.circleClick.emit();
  }
}