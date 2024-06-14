import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { FacturaService } from 'src/app/servicios/factura.service';
import { PagoService } from 'src/app/servicios/pago.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { UserService } from 'src/app/servicios/user.service';

interface Pago {
  tipo_pago: string;
  monto: number;
  id_pago: number;
  factura_id: number;
  user_id: number;
}

interface Factura {
  servicio_id: number;
  fecha_pago: any;
  estado: string;
  consumo: any;
  id_factura: any;
  costo: number;
  tipo: string;
}

interface Servicio {
  id: number;
  nombre: string;
  codigo_suscripcion: number;
}

@Component({
  selector: 'app-listar-pagos',
  templateUrl: './listar-pagos.component.html',
  styleUrls: ['./listar-pagos.component.css']
})
export class ListarPagosComponent implements OnInit {

  pagos: Pago[] = [];
  facturas: Factura[] = [];
  servicios: Servicio[] = [];
  usuario_id: number = 0;
  isAuthenticated: boolean = false;

  constructor(
    private authService: AuthService,
    private facturaService: FacturaService,
    private servicioService: ServicioService,
    private pagoService: PagoService,
    private userService: UserService
  ) {
    this.checkAuthentication();
  }

  ngOnInit(): void {
    if (this.isAuthenticated) {
      this.loadFacturas();
      this.loadServicios();
      this.loadAllPagos();
    }
  }

  checkAuthentication(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.authService.getDecodedToken();
      const username = decodedToken.username;
      this.userService.getUserIdByUsername(username).subscribe(
        (userResponse: any) => {
          this.usuario_id = userResponse.id;
          this.isAuthenticated = true;
          this.loadAllPagos(); // Cargar pagos después de obtener la ID de usuario
        },
        error => {
          console.error('Error al obtener el ID de usuario:', error);
          this.isAuthenticated = false;
        }
      );
    } else {
      this.isAuthenticated = false;
    }
  }

  loadAllPagos(): void {
    this.pagoService.getPagos().subscribe((data: Pago[]) => {
      this.pagos = data;
      console.log('Pagos:', this.pagos);
    });
  }

  loadPagos(): void {
    this.pagoService.getPagosByUserId(this.usuario_id).subscribe((data: Pago[]) => {
      this.pagos = data;
      console.log('Pagos:', this.pagos);
    });
  }

  loadFacturas(): void {
    this.facturaService.getFacturas().subscribe((data: Factura[]) => {
      this.facturas = data;
      console.log('Facturas:', this.facturas);
    });
  }

  loadServicios(): void {
    this.servicioService.getServicios().subscribe((data: Servicio[]) => {
      this.servicios = data;
      console.log('Servicios:', this.servicios);
    });
  }

  getFacturaNombre(facturaId: number): string {
    const factura = this.facturas.find(f => f.id_factura === facturaId);
    return factura ? factura.estado : 'Desconocido';
  }

  getFacturaConsumo(facturaId: number): string {
    const factura = this.facturas.find(f => f.id_factura === facturaId);
    return factura ? `${factura.consumo} ${factura.tipo === 'AGUAS DE MANIZALES' ? 'm³' : factura.tipo === 'CHEC' ? 'kWh' : ''}` : 'Desconocido';
  }

  filterPagos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.toLowerCase();
    this.pagos = this.pagos.filter(pago => pago.tipo_pago.toLowerCase().includes(filterValue));
  }
}

