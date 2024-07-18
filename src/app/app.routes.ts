import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';

 export const routes:Routes=[
    {
        path: '',
        loadChildren:()=>import('./public/public.routes')
    },
    {
        path: 'dashboard',
        loadChildren:()=>import('./private/private.routes'),
        canActivate: [loggedGuard] //guardia
    },
    {
      path:'**',
      title:'Error 404',
      loadComponent: () => import('./shared/components/page-not-found/page-not-found.component'),
    }
] ;
