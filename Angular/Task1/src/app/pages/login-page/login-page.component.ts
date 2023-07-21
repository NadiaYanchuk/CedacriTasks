import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private router: Router) {}

  login(): void {
    if (this.username === 'Admin' && this.password === '12345') {
      localStorage.setItem('authenticated', 'true');
      this.router.navigate(['/profile']);
    } else {
      this.loginError = true;
    }
  }
}
