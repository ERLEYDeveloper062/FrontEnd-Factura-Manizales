import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasRoutingModule } from './facturas-routing.module';
import { RegistrarFacturaComponent } from './registrar-factura/registrar-factura.component';
import { EditarFacturaComponent } from './editar-factura/editar-factura.component';
import { EliminarFacturaComponent } from './eliminar-factura/eliminar-factura.component';
import { ListarFacturaComponent } from './listar-factura/listar-factura.component';


@NgModule({
  declarations: [
    RegistrarFacturaComponent,
    EditarFacturaComponent,
    EliminarFacturaComponent,
    ListarFacturaComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule
  ]
})
export class FacturasModule { }
