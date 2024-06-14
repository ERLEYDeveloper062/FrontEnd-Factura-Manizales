import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private apiUrl = 'http://127.0.0.1:8000/facturas/'; // Asegúrate de que este sea el endpoint correcto

  constructor(private http: HttpClient) { }

  getFacturas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getFacturaByServicioId(servicio_id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}servicio/${servicio_id}`);
  }  


  registrarFactura(factura: any): Observable<any> {
    return this.http.post(this.apiUrl, factura);
  }
}
