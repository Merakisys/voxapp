import { Component, EnvironmentInjector, inject } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonFabButton,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, add } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonFabButton,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
  ],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router: Router) {
    addIcons({ triangle, ellipse, square, add });
  }

  goToRepertories2() {
    this.router.navigate(['/tabs/repertories2']);
  }
}
