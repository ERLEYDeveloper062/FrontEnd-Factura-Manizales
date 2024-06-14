import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPagosComponent } from '../pagos/registrar-pagos/registrar-pagos.component';
import { RegistrarServicioComponent } from '../facturas/registrar-servicio/registrar-servicio.component'
import { ListarFacturaComponent } from './listar-factura/listar-factura.component';

const routes: Routes = [
  {
    path: "listar-facturas",
    component: ListarFacturaComponent
  },
  {
    path: "registrar-servicio",
    component: RegistrarServicioComponent
  },
  {
    path: "registrar-pagos",
    component: RegistrarPagosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasRoutingModule { }
