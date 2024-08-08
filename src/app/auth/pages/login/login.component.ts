import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LottieComponent, InputTextModule, ButtonModule, ToastModule, RippleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  constructor(private router:Router) {

   }

  options: AnimationOptions = {
    path: 'anim/login_animation.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '700px',
    margin: '0 auto',
  };

  GotoRegister(){
    this.router.navigate(['auth/register'])
  }

  // redirigir al dashboard 
  GotoDashboard(){
    localStorage.setItem('token', '71|i1IXZw6JwbHnTxYqbuDfG3OatBV6TKtJXOAvX4qp437c5b42')
    this.router.navigate(['crm/dashboard']);
  }
}
