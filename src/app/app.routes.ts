import { loggedGuard } from './core/guards/logged.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren:()=>import('./public/public.routes').then(r=>r.PUBLIC_ROUTES)
    },
    {
        path: 'dashboard',
        loadChildren:()=>import('./private/private.routes').then(r=>r.PRIVATE_ROUTES),
        canActivate: [loggedGuard] //guardia
    },
    {
      path:'**',
      title:'Error 404',
      loadComponent: () => import('./shared/components/page-not-found/page-not-found.component').then(m=>m.PageNotFoundComponent),
    }
];
