import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  admin = {
    name: 'Admin'
  };
  constructor(private router: Router) {
    const isAuthenticated = localStorage.getItem('authenticated') === 'true';
    if (!isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }
  logout(): void {
    localStorage.removeItem('authenticated');
    this.router.navigate(['/login']);
  }
}
