import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './publico/pagina-maestra/inicio/inicio.component';
import { RutaNoEncontradaComponent } from './publico/error/ruta-no-encontrada/ruta-no-encontrada.component';
import { ListarFacturaComponent } from './modulos/facturas/listar-factura/listar-factura.component';
import { ListarPagosComponent } from './modulos/pagos/listar-pagos/listar-pagos.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full"
  
  },
  {
    path: "seguridad",
    loadChildren: () =>
      import("./modulos/seguridad/seguridad.module").then(
        mod => mod.SeguridadModule
      )
  },
  {
    path: "facturas",
    loadChildren: () =>
      import("./modulos/facturas/facturas.module").then(
        mod => mod.FacturasModule
      )
    //path: "listar-facturas",
    //component: ListarFacturaComponent
  },
  {
    path: "",
    redirectTo: "/listar-facturas",
    pathMatch: "full"
  },
  {
    path: "listar-pagos",
    component: ListarPagosComponent
  },
  {
    path: "",
    redirectTo: "/listar-pagos",
    pathMatch: "full"
  },
  {
    path: "**",
    component: RutaNoEncontradaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
