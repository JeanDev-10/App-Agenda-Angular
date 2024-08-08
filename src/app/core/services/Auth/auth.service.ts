import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean{
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      return !!token
    }

    return false;
  }
}
