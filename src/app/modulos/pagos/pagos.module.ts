import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';
import { RegistrarPagosComponent } from './registrar-pagos/registrar-pagos.component';
import { ListarPagosComponent } from './listar-pagos/listar-pagos.component';
import { EliminarPagosComponent } from './eliminar-pagos/eliminar-pagos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrarPagosComponent,
    ListarPagosComponent,
    EliminarPagosComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PagosRoutingModule
  ],
  exports: [
    ListarPagosComponent
  ]
})
export class PagosModule { }
