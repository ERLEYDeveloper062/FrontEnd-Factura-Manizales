import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  token: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        this.authService.saveToken(this.token);
        console.log('Token:', this.token);
        const decodedToken = this.authService.getDecodedToken();
        localStorage.setItem('authToken', this.token);
        localStorage.setItem('user', JSON.stringify(decodedToken));
        this.userService.setUser(decodedToken);
        this.userService.setToken(this.token);

        // Asegúrate de que el token se guarda correctamente antes de redirigir
        setTimeout(() => {
          this.router.navigate(['/inicio']); // Ajusta esto según tu ruta de destino
        }, 500); // Ajusta el tiempo según sea necesario
      } else {
        console.error('Token not found in URL');
      }
    });

    // Verificar si el token está disponible después de guardar
    this.token = this.authService.getToken();
    if (this.token) {
      console.log('Token from localStorage:', this.token);
    } else {
      console.error('Token not found in localStorage');
    }
  }
}
