import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/Auth/auth.service';

export const desloggedGuard: CanActivateFn = (route, state) => {
  
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isAuthenticated()) {
      return true;
    }else{
      return router.navigateByUrl('crm/dashboard')
    }
};
