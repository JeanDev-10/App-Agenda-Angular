import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export default class RegisterComponent {

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
}
