import { Routes } from '@angular/router';

export default [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    loadComponent:()=>import('./pages/home/home.component')
  },
  {
    path:'auth',
    loadChildren: () => import('../auth/auth.routes'),
  }
] as Routes;
