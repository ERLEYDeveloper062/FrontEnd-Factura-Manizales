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
      this.LoadPagos();
    }
  }

  LoadPagos(): void {
    this.facturaService.getFacturas().subscribe(
        (facturasResponse: any) => {
          this.facturas = facturasResponse;
          this.servicioService.getServicios().subscribe(
            (serviciosResponse: any) => {
              this.servicios = serviciosResponse;
              this.pagoService.getPagos().subscribe(
                (pagosResponse: any) => {
                  this.pagos = pagosResponse;
                },
                error => {
                  console.error('Error al obtener los pagos:', error);
                }
              );
            },
            error => {
              console.error('Error al obtener los servicios:', error);
            }
          );
        },
        error => {
          console.error('Error al obtener las facturas:', error);
        }
      );
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

  getFacturaNombre(facturaId: number): string {
    const factura = this.facturas.find(f => f.id_factura === facturaId);
    if (factura) {
      const servicio = this.servicios.find(s => s.id === factura.servicio_id);
      return servicio ? servicio.nombre : 'Desconocido';
    }
    return 'Desconocido';
  }  

  getCodigoSuscripcion(facturaId: number): string {
    const factura = this.facturas.find(f => f.id_factura === facturaId);
    if (factura) {
      const servicio = this.servicios.find(s => s.id === factura.servicio_id);
      return servicio ? servicio.codigo_suscripcion.toString() : 'Desconocido';
    }
    return 'Desconocido';
  }

  getTipoServicio(facturaId: number): string {
    const factura = this.facturas.find(f => f.id_factura === facturaId);
    if (factura) {
      const servicio = this.servicios.find(s => s.id === factura.servicio_id);
      return servicio ? servicio.nombre : 'Desconocido';
    }
    return 'Desconocido';
  }

  getFacturaConsumo(facturaId: number): string {
    const factura = this.facturas.find(f => f.id_factura === facturaId);
    return factura ? `${factura.consumo} ${factura.tipo === 'AGUAS DE MANIZALES' ? 'm³' : factura.tipo === 'CHEC' ? 'kWh' : ''}` : 'Desconocido';
  }

  getFacturaFechaPago(facturaId: number): any {
    const factura = this.facturas.find(f => f.id_factura === facturaId);
    return factura ? factura.fecha_pago : 'Desconocido';
  }

  filterPagos(event: Event): void {
    const input = event.target as HTMLInputElement;
    const filterValue = input.value.toLowerCase();
    this.pagos = this.pagos.filter(pago => pago.tipo_pago.toLowerCase().includes(filterValue));
  }
}

