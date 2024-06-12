import { Component } from '@angular/core';

interface Pago {
  nombre: string;
  fechaPago: Date;
  consumo: string;
  totalPagado: number;
}

@Component({
  selector: 'app-listar-pagos',
  templateUrl: './listar-pagos.component.html',
  styleUrls: ['./listar-pagos.component.css']
})
export class ListarPagosComponent {
  pagos: Pago[] = [
    { nombre: 'Agua - Mi casa', fechaPago: new Date('2024-04-30'), consumo: '7 m³', totalPagado: 103034 },
    { nombre: 'Gas - Mi Casa', fechaPago: new Date('2024-04-28'), consumo: '4 m³', totalPagado: 23032 },
    { nombre: 'Luz - Mi Casa', fechaPago: new Date('2024-04-23'), consumo: '120 kWh', totalPagado: 130125 },
    { nombre: 'Agua - Mi Casa', fechaPago: new Date('2024-03-30'), consumo: '6 m³', totalPagado: 91675 },
    { nombre: 'Gas - Mi Casa', fechaPago: new Date('2024-03-20'), consumo: '5 m³', totalPagado: 21932 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onFilter(): void {
    // Lógica de filtrado aquí
  }
}
