import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IonicModule], // Importa IonicModule para ion-fab-button
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  private routerSubscription: Subscription = new Subscription();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Ruta actual:', event.urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  navigateTo(route: string): void {
    console.log('Navegando a:', route);
    setTimeout(() => {
      this.router.navigate([route]);
    }, 100);
  }
}