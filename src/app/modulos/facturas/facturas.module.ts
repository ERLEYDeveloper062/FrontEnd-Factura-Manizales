import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasRoutingModule } from './facturas-routing.module';
import { RegistrarFacturaComponent } from './registrar-factura/registrar-factura.component';
import { EditarFacturaComponent } from './editar-factura/editar-factura.component';
import { EliminarFacturaComponent } from './eliminar-factura/eliminar-factura.component';
import { ListarFacturaComponent } from './listar-factura/listar-factura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrarServicioComponent } from './registrar-servicio/registrar-servicio.component';


@NgModule({
  declarations: [
    RegistrarFacturaComponent,
    EditarFacturaComponent,
    EliminarFacturaComponent,
    ListarFacturaComponent,
    RegistrarServicioComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacturasModule { }
