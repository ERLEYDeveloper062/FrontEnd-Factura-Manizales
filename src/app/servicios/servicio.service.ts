import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private baseUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  getUserId(username: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/users/id/${username}`, { headers });
  }

  registrarServicio(servicioData: any): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}/servicios/`, servicioData, { headers });
  }

  getServicios(): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/servicios/`, { headers });
  }

  getServicioById(Id: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/servicios/usuario/${Id}`, { headers });
  }

  getServiciosByCodigo(codigo: number): Observable<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.baseUrl}/servicios/id/${codigo}`, { headers });
  }
}
