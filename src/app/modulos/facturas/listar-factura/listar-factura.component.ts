import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { FacturaService } from 'src/app/servicios/factura.service';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { PagoService } from 'src/app/servicios/pago.service';
import { UserService } from 'src/app/servicios/user.service';

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
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.css']
})
export class ListarFacturaComponent implements OnInit {
  facturas: Factura[] = [];
  servicios: Servicio[] = [];
  isModalVisible: boolean = false;
  isPaymentModalVisible: boolean = false;
  isRegisterServiceModalVisible: boolean = false;
  selectedPago: any = { total: 0, medio: 'PSE', factura_id: 0 };
  registerServiceForm: FormGroup;
  paymentForm: FormGroup;
  tipoServicios: string[] = ["AGUAS DE MANIZALES", "EFIGAS", "CHEC"];
  mediosDePago: string[] = ["PSE", "CREDITO", "DEBITO"];
  usuario_id: number = 0; // Inicialización predeterminada
  isAuthenticated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private facturaService: FacturaService,
    private servicioService: ServicioService,
    private pagoService: PagoService,
    private authService: AuthService,
    private userService: UserService
  ) {
    this.checkAuthentication();

    this.registerServiceForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      codigo_suscripcion: ['', Validators.required],
      usuario_id: [this.usuario_id, Validators.required]
    });

    this.paymentForm = this.fb.group({
      tipo_pago: ['', Validators.required], // Cambiado para coincidir con el backend
      monto: ['', [Validators.required, Validators.min(0)]],
      factura_id: ['', Validators.required],
      user_id: [this.usuario_id, Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.isAuthenticated) {
      this.loadServicios();
      //this.loadFacturas1();
      //this.loadServicios1()
    }
  }

  checkAuthentication(): void {
    const token = this.authService.getToken();
    if (token) {
      const decodedToken: any = this.authService.getDecodedToken();
      this.userService.setUser(decodedToken);
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }
  }

  loadServicios(): void {
    if (this.isAuthenticated) {
      const username = this.authService.getDecodedToken().username;
      this.servicioService.getUserId(username).subscribe(
        (userResponse: any) => {
          const userId = userResponse.id;
          this.servicioService.getServicioById(userId).subscribe((data: Servicio[]) => {
            this.servicios = data;
            console.log('Servicios:', this.servicios);
            this.loadFacturas(); // Cargar facturas después de los servicios
          });
        },
        error => {
          console.error('Error al obtener el ID de usuario:', error);
        }
      );
    }
  }

  loadFacturas(): void {
    if (this.isAuthenticated) {
        this.facturas = [];
        this.servicios.forEach(servicio => {
            this.servicioService.getServiciosByCodigo(servicio.codigo_suscripcion).subscribe(
                (servicioResponse: any) => {
                    this.facturaService.getFacturaByServicioId(servicioResponse.id).subscribe(
                        (facturaResponse: any) => {
                            if (facturaResponse.factura) {
                                this.facturas.push(facturaResponse.factura);
                            } else {
                                this.facturas.push(facturaResponse);
                            }
                            console.log('Facturas:', this.facturas);
                        },
                        error => {
                            console.error('Error al obtener facturas por ID de servicio:', error);
                        }
                    );
                },
                error => {
                    console.error('Error al obtener el ID de servicio:', error);
                }
            );
        });
    }
}


  loadFacturas1(): void {
    if (this.isAuthenticated) {
      this.facturaService.getFacturas().subscribe((data: Factura[]) => {
        this.facturas = data;
      });
    }
  }

  loadServicios1(): void {
    if (this.isAuthenticated) {
      this.servicioService.getServicios().subscribe((data: Servicio[]) => {
        this.servicios = data;
        console.log('Servicios:', this.servicios);
      });
    }
  }

  getFacturaImage(tipo: string): string {
    switch (tipo) {
      case 'AGUAS DE MANIZALES':
        return 'assets/images/Agua.png';
      case 'EFIGAS':
        return 'assets/images/gas.png';
      case 'CHEC':
        return 'assets/images/electricidad.png';
      default:
        return 'assets/images/default.png';
    }
  }

  openPaymentModal(factura: Factura): void {
    console.log('Factura seleccionada:', factura);
    const username = this.authService.getDecodedToken().username;

    console.log('username:', username);

    this.userService.getUserIdByUsername(username).subscribe(
      (userResponse: any) => {
        this.usuario_id = userResponse.id;

        console.log('ID de usuario:', this.usuario_id);

        this.selectedPago = {
          factura: factura.id_factura,
          total: Math.round(factura.costo),
          medio: 'PSE',
          factura_id: factura.id_factura,
          consumo: factura.consumo,
          estado: factura.estado,
          fecha_pago: factura.fecha_pago,
          servicio_id: factura.servicio_id,
          user_id: this.usuario_id
        };

        console.log('Pago seleccionado:', this.selectedPago);
        this.paymentForm.patchValue({
          factura_id: factura.id_factura,
          monto: this.selectedPago.total,
          tipo_pago: 'PSE', // Cambiado para coincidir con el backend
          user_id: this.usuario_id
        });
        console.log('Formulario de pago:', this.paymentForm.value);
        this.isPaymentModalVisible = true;
      },
      error => {
        console.error('Error al obtener el ID de usuario:', error);
      }
    );
  }



  closePaymentModal(): void {
    this.isPaymentModalVisible = false;
  }

  openRegisterServiceModal(): void {
    this.isRegisterServiceModalVisible = true;
  }

  closeRegisterServiceModal(): void {
    this.isRegisterServiceModalVisible = false;
  }

  onRegisterServiceSubmit(): void {
    if (this.registerServiceForm.valid) {
      const formData = this.registerServiceForm.value;
      const username = this.authService.getDecodedToken().username;

      this.servicioService.getUserId(username).subscribe(
        (userResponse: any) => {
          formData.usuario_id = userResponse.id;
          this.servicioService.registrarServicio(formData).subscribe(response => {
            alert('Servicio registrado:');
            this.loadServicios();
            this.closeRegisterServiceModal();
          }, error => {
            console.error('Error al registrar servicio:', error);
          });
        },
        error => {
          console.error('Error al obtener el ID de usuario:', error);
        }
      );
    }
  }

  onPaymentSubmit(): void {
    console.log('Pago:', this.paymentForm.value);
    alert('Procesando pago...');
    if (this.paymentForm.valid) {
      const formData = this.paymentForm.value;
      console.log('Pago:', formData);
      if (formData.monto >= this.selectedPago.total) {
        this.pagoService.registrarPago(formData).subscribe(response => {
          alert('Pago registrado:');
          this.loadFacturas();
          this.closePaymentModal();
        }, error => {
          console.error('Error al registrar pago:', error);
        });
      } else {
        alert('El monto a pagar no puede ser menor al total de la factura.');
      }
    }
  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    this.facturas = [];
    this.servicios = [];
    this.usuario_id = 0;
    this.isAuthenticated = false;
  }
}
