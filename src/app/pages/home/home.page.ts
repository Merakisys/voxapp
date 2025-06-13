// src/app/home/home.page.ts
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
// TODO: Update the import path below to the correct location of WelcomeSectionComponent
// Example: import { WelcomeSectionComponent } from '../../components/feature/welcome-section/welcome-section.component';
import { WelcomeSectionComponent } from '../../components/feature/welcome-section/welcome-section.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, WelcomeSectionComponent],
})
export class HomePage {
  constructor() {}
}