import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IndentificarUsuarioComponent } from './indentificar-usuario/indentificar-usuario.component';
import { IdentificacionDosfaComponent } from './identificacion-dosfa/identificacion-dosfa.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';


@NgModule({
  declarations: [
    IndentificarUsuarioComponent,
    IdentificacionDosfaComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
