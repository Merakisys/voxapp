import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash/pantalla1',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.routes').then((m) => m.default),
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'liturgy',
        loadComponent: () =>
          import('./pages/liturgy/liturgy.page').then((m) => m.LiturgyPage),
      },
      {
        path: 'repertories2',
        loadChildren: () =>
          import('./pages/Repertories2/repertories.routes').then(
            (m) => m.routes
          ),
      },

      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
];
