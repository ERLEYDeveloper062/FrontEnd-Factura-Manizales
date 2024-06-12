import { Component } from '@angular/core';


interface Factura {
  nombre: string;
  consumo: string;
  total: string;
  fechaPago: Date;
  estado: string;
}

@Component({
  selector: 'app-listar-factura',
  templateUrl: './listar-factura.component.html',
  styleUrls: ['./listar-factura.component.css']
})
export class ListarFacturaComponent {
completePayment() {
throw new Error('Method not implemented.');
}
  facturas: Factura[] = [
    { nombre: 'Agua - Mi casa', consumo: '8 m³', total: '70.403', fechaPago: new Date('2024-06-13'), estado: 'Vencida' },
    { nombre: 'Luz - Mi casa', consumo: '103 kWh', total: '94.330', fechaPago: new Date('2024-06-30'), estado: 'Pendiente' },
  ];

  isModalVisible: boolean = false;
  selectedPago: any = { factura: '', total: '', medio: 'PSE' };
  showModal: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  openModal(factura: Factura): void {
    this.selectedPago = {
      factura: factura.nombre,
      total: factura.total,
      medio: 'PSE'
    };
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  openRegisterModal(): void {
    this.showModal = true;
  }

  closeRegisterModal(): void {
    this.showModal = false;
  }
}
