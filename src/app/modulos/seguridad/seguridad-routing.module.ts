import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndentificarUsuarioComponent } from './indentificar-usuario/indentificar-usuario.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';

const routes: Routes = [
  {
    path : "indentificar-usuario",
    component : IndentificarUsuarioComponent
  },
  {
    path: "cambiar-clave",
    component: CambioClaveComponent
  },
  {
    path : "recuperar-clave",
    component: RecuperarClaveComponent
  },
  {
    path: "cerrar-sesion",
    component: CerrarSesionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
