import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'liturgy',
    loadComponent: () => import('./liturgy/liturgy.page').then( m => m.LiturgyPage)
  },
  {
    path: 'repertoire',
    loadComponent: () => import('./repertoire/repertoire.page').then( m => m.RepertoirePage)
  },

];
