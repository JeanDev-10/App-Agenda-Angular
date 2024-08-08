import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { AlertService } from '../../../core/services/Alert/alert.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LottieComponent, InputTextModule, ButtonModule, ToastModule, RippleModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {

  private readonly alerts = inject(AlertService);

  constructor(private router:Router) { 

  }

  options: AnimationOptions = {
    path: 'anim/register_animation.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '700px',
    margin: '0 auto',
  };

  // Ir a la pagina de login

  Gotologin(){
    this.router.navigate(['auth/login']);
  }

  
  register() {
    this.alerts.success('Enhorabuena!, tu cuenta se creó correctamente.')
    this.router.navigate(['auth/login']);
  }
}
