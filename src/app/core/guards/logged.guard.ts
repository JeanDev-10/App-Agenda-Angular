 import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

export const loggedGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {
  //logica de guardia para saber si está logeado o no
  return true;
};
