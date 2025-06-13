import { Routes } from '@angular/router';
import { RepertorioPage } from './Repertorio/Repertorio';
import { CrearRepertorioPage } from './Repertorio/CrearRepertorio/CrearRepertorio';
import { ListaRepertorioPage } from './Repertorio/ListaRepertorio/ListaRepertorio';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'repertorio',
    pathMatch: 'full',
  },
  {
    path: 'repertorio',
    component: RepertorioPage,
  },
  {
    path: 'repertorio/crear',
    component: CrearRepertorioPage,
  },
  {
    path: 'repertorio/lista',
    component: ListaRepertorioPage,
  },
];
