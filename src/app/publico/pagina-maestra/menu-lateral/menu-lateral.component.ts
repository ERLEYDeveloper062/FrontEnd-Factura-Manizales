import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {
  user: any = null;

  constructor(
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadUser();
    this.userService.user$.subscribe(user => {
      this.user = user;
    });
  }

  loadUser(): void {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      this.user = JSON.parse(userStr);
    } else {
      this.user = this.userService.getUser();
    }
  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.userService.clearUser();
    this.userService.clearToken();
    this.user = null;
    // Redirigir a la página de inicio
    this.router.navigate(['/inicio'], {
      queryParams: { token: null },
      queryParamsHandling: 'merge'
    });
  }

  onSubmit() {
    window.location.href = 'https://facturas-cfm6.onrender.com';
  }
}
