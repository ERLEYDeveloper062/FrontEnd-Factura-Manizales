import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.component.html',
  styleUrls: ['./registrar-servicio.component.css']
})
export class RegistrarServicioComponent {
  @Output() close = new EventEmitter<void>();

  servicio = {
    tipo: '',
    nombre: '',
    numero: ''
  };

  onSubmit() {
    // Aquí iría la lógica para registrar el servicio
    console.log('Servicio registrado', this.servicio);

    // Emitir evento para cerrar el modal
    this.close.emit();
  }
}
