import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly api:string=environment.apiUrl;
  constructor() { }
  login(){

  }
  register(){

  }
  logout(){

  }
}
