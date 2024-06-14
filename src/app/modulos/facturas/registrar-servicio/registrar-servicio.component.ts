import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.component.html',
  styleUrls: ['./registrar-servicio.component.css']
})
export class RegistrarServicioComponent{
  registerForm: FormGroup;
  usuario_id: number | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken: any = jwt_decode.jwtDecode(token);
      this.usuario_id = decodedToken.user_id; // Ajusta esto según la estructura de tu token
    } else {
      console.error('Token no disponible');
      this.router.navigate(['/seguridad/indentificar-usuario']); // Redirigir a la página de inicio de sesión si no hay token
    }
  }

  onSubmit(): void {
    if (this.registerForm.valid && this.usuario_id !== undefined) {
      const formData = { ...this.registerForm.value, usuario_id: this.usuario_id };

      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('Token no disponible');
        return;
      }

      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      this.http.post('http://127.0.0.1:8000/servicios/', formData, { headers })
        .subscribe(
          response => {
            console.log(response);
            this.router.navigate(['/listar-facturas']);
          },
          error => {
            console.error(error);
          }
        );
    }
  }
}
