import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  
  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  setUser(user: any): void {
    this.userSubject.next(user);
  }

  clearUser(): void {
    this.userSubject.next(null);
  }

  setToken(token: string): void {
    this.tokenSubject.next(token);
  }

  clearToken(): void {
    this.tokenSubject.next(null);
  }
}
