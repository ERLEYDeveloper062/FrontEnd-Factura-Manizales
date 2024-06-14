import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private router: Router) { }

  saveToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (token) {
      return this.decodeToken(token);
    }
    return null;
  }

  decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch (e) {
      console.error('Failed to decode token', e);
      return null;
    }
  }

  login(formData: any) {
    this.http.post(`${this.apiURL}/auth/login`, formData).subscribe((res: any) => {
      if (res.access_token) {
        this.saveToken(res.access_token);
        this.router.navigate(['/inicio']);
      }
    });
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/inicio']);
  }

  getUser() {
    const token = this.getToken();
    if (token) {
      return this.decodeToken(token);
    }
    return null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
