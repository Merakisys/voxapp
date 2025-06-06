import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then(m => m.HomePage),
  },
  {
    path: 'mockup2',
    loadChildren: () =>
      import('./Mockup2/mockup2.routes').then(m => m.routes),  
  },
   {
    path: 'splash',
    loadChildren: () =>
      import('./splash/splash.routes').then(m => m.default),
  },
  {
    path: '',
    redirectTo: 'splash/pantalla1',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
