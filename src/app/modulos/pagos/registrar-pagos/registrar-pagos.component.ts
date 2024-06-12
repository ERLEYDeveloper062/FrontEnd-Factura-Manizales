import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-pagos',
  templateUrl: './registrar-pagos.component.html',
  styleUrls: ['./registrar-pagos.component.css']
})
export class RegistrarPagosComponent implements OnInit{
  @Input() isVisible: boolean = false;
  @Input() pago: any = { factura: '', total: '', medio: 'PSE' };

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.isVisible = false;
  }

  onSubmit(): void {
    console.log('Pago completado:', this.pago);
    this.closeModal();
  }
}
