import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  token: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      if (this.token) {
        console.log('Token:', this.token);
        // Decodifica el token y almacena la información del usuario
        const decodedToken = jwt_decode.jwtDecode(this.token);
        localStorage.setItem('authToken', this.token);
        localStorage.setItem('user', JSON.stringify(decodedToken));
        this.userService.setUser(decodedToken);
        this.userService.setToken(this.token);
        
      } else {
        console.error('Token not found in URL');
      }
    });
  }
}
