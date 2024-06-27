import { Routes } from '@angular/router';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadComponent:()=>import('./pages/home/home.component').then((c)=>c.HomeComponent)
  },
  {
    path:'auth',
    loadChildren: () => import('../auth/auth.routes').then((m) => m.AUTH_ROUTES),
  }
];
