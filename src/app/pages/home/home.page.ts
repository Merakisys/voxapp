import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

import { IonicModule } from '@ionic/angular';
import { BiblicalCardComponent } from '../../components/biblical-card/biblical-card.component';
import { CircularImageComponent } from '../../components/circular-image/circular-image.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule, 
    BiblicalCardComponent, 
    CircularImageComponent
  ],
  
})
export class HomePage {

  verseData = {
    backgroundImage: 'assets/images/bible-background.jpg', // Coloca tu imagen en src/assets/images/
    verse: '"Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis."',
    reference: 'Jeremías 29:11'
  };

  repertoryImage1: string = 'assets/images/image-Jeremias29-11.jpg';
  repertoryImage2: string = 'assets/images/image-Sofonias3-17.jpg';

  constructor() {}

  onRepertoryClick(): void {
    console.log('Repertorio clickeado');
  }

  onTextClick(): void {
    console.log('Ion-text clickeado!');
  }

  onBibleCardClick(reference: string): void {
    console.log('Bible card clickeada:', reference);
  }

}