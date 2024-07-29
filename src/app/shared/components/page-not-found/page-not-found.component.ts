import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [LottieComponent, ButtonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export default class PageNotFoundComponent {

  constructor(private router:Router){

  }

  options: AnimationOptions = {
    path: 'anim/404error_animation.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  // Ir al login

  GotoLogin(){
    this.router.navigate(['auth/login']);
  }

}
