import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';
import { desloggedGuard } from './core/guards/deslogged.guard';

 export const routes:Routes=[
    {
        path: '',
        loadChildren:()=>import('./public/public.routes'),
        canActivate: [desloggedGuard] //guardia para saber si esta loguiado 
    },
    {
        path: '',
        loadChildren:()=>import('./private/private.routes'),
        canActivate: [loggedGuard] //guardia para saber si no esta logiado
    },
    {
      path:'**',
      title:'Error 404',
      loadComponent: () => import('./shared/components/page-not-found/page-not-found.component'),
    }
] ;
