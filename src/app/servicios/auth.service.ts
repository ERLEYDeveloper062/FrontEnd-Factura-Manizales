import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private router: Router) { }

  login(formData: any) {
    this.http.post(`${this.apiURL}/auth/login`, formData).subscribe((res: any) => {
      if (res.access_token) {
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/inicio']);
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/seguridad/indentificar-usuario']);
  }

  getUser() {
    const token = localStorage.getItem('token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload;
    }
    return null;
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
