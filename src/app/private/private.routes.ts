import { Routes } from '@angular/router';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    loadComponent:()=>import('./pages/dashboard/dashboard.component').then((c)=>c.DashboardComponent)
  },
];
