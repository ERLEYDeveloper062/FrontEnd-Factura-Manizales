import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPagosComponent } from '../pagos/registrar-pagos/registrar-pagos.component';
import { RegistrarServicioComponent } from '../servicios-publicos/registrar-servicio/registrar-servicio.component';

const routes: Routes = [
  {
    path: "registrar-servicio",
    component: RegistrarPagosComponent
  },
  {
    path: "",
    redirectTo: "/registrar-pagos",
    pathMatch: "full"
  },

  {
    path: "registrar-servicio",
    component: RegistrarServicioComponent
  },
  {
    path: "",
    redirectTo: "/registrar-servicio",
    pathMatch: "full"
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasRoutingModule { }
