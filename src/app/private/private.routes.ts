import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent:()=>import('./pages/dashboard/dashboard.component')
  },
] as Routes;
