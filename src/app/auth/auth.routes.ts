import { Routes } from "@angular/router";

export default [
    {
      path:'',
      redirectTo:"register",
      pathMatch:'full'
    },
    { path: 'register', loadComponent: () => import('./pages/register/register.component')},
    { path: 'login', loadComponent: ()=> import('./pages/login/login.component') }
] as Routes;
