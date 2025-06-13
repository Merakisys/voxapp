import { Routes } from '@angular/router';
import { OnboardingGuard } from '../core/onboarding.guard';

export const routes: Routes = [
  {
    path: 'pantalla1',
    canActivate: [OnboardingGuard],
    loadComponent: () =>
      import('./pantalla1/pantalla1.page').then(m => m.Pantalla1Page),
  },
  {
    path: 'pantalla2',
    canActivate: [OnboardingGuard],
    loadComponent: () =>
      import('./pantalla2/pantalla2.page').then(m => m.Pantalla2Page),
  },
  {
    path: 'pantalla3',
    canActivate: [OnboardingGuard],
    loadComponent: () =>
      import('./pantalla3/pantalla3.page').then(m => m.Pantalla3Page),
  },
  {
    path: 'pantalla4',
    canActivate: [OnboardingGuard],
    loadComponent: () =>
      import('./pantalla4/pantalla4.page').then(m => m.Pantalla4Page),
  },
  {
    path: '',
    redirectTo: 'pantalla1',
    pathMatch: 'full',
  }
];
