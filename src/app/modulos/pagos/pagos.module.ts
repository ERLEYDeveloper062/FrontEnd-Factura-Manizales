import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { RegistrarPagosComponent } from './registrar-pagos/registrar-pagos.component';
import { ListarPagosComponent } from './listar-pagos/listar-pagos.component';
import { EliminarPagosComponent } from './eliminar-pagos/eliminar-pagos.component';


@NgModule({
  declarations: [
    RegistrarPagosComponent,
    ListarPagosComponent,
    EliminarPagosComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule
  ]
})
export class PagosModule { }
