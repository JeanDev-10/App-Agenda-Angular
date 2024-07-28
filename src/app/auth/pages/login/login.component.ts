import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LottieComponent, InputTextModule, ButtonModule, ToastModule, RippleModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  constructor(private router:Router, private messageService: MessageService) {

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

  show() {
    this.messageService.add({ severity: 'success', summary: 'Enhorabuena!', detail: 'Iniciaste sesión' });
  }
}
