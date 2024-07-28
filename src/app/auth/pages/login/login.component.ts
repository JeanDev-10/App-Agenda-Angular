import { Component } from '@angular/core';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent {
  options: AnimationOptions = {
    path: 'anim/login_animation.json',
  };

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '700px',
    margin: '0 auto',
  };
}
