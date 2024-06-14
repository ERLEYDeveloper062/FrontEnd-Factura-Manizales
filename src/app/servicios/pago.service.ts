import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private apiUrl = 'http://127.0.0.1:8000/pagos'; // URL del backend

  constructor(private http: HttpClient) { }

  // Método para registrar un pago
  registrarPago(pagoData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    });

    return this.http.post<any>(this.apiUrl, pagoData, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: any) {
    console.error('Error en la API', error);
    return throwError(error.message || 'Error en el servidor');
  }

  getPagos(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    });

    return this.http.get<any>(this.apiUrl, { headers })
      .pipe(
        map(response => response.pagos || []), // Asegurarse de que la respuesta contenga un array de pagos
        catchError(this.handleError)
      );
  }

  getPagosByUserId(userId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    });

    return this.http.get<any>(`${this.apiUrl}/users/${userId}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }
}
