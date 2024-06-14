import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = 'http://127.0.0.1:8000/users';

  private userSubject = new BehaviorSubject<any>(null);
  private token: string | null = null;

  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.loadUserFromLocalStorage();
  }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  setUser(user: any) {
    this.userSubject.next(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return this.userSubject.value;
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    return this.token || localStorage.getItem('token');
  }

  clearUser() {
    this.userSubject.next(null);
    localStorage.removeItem('user');
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  getUserIdByUsername(username: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get<any>(`${this.apiUrl}/id/${username}`, { headers });
  }

  private loadUserFromLocalStorage() {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (userStr) {
      this.userSubject.next(JSON.parse(userStr));
    }
    if (token) {
      this.token = token;
    }
  }
}
