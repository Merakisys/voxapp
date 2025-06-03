import { Routes } from '@angular/router';
import { ConfiguracionPage } from './Configuracion/Configuracion';
import { RepertorioPage } from './Repertorio/Repertorio';
import { CrearRepertorioPage } from './Repertorio/CrearRepertorio/CrearRepertorio';
import { ListaRepertorioPage } from './Repertorio/ListaRepertorio/ListaRepertorio';
import { CancionPage } from './Cancion/Cancion';


export const routes: Routes = [
  {
    path: '',
    component: ConfiguracionPage,
  },
  {
    path: 'configuracion',
    component: ConfiguracionPage,
  },

   
  {
    path: 'repertorio',
     component: RepertorioPage
  },
   {
    path: 'repertorio/crear',
     component: CrearRepertorioPage,
   },
   {
     path: 'repertorio/lista',
     component: ListaRepertorioPage,
   },
   {
     path: 'cancion',
    component: CancionPage,
   }
];
