import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { IndentificarUsuarioComponent } from './indentificar-usuario/indentificar-usuario.component';
import { IdentificacionDosfaComponent } from './identificacion-dosfa/identificacion-dosfa.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndentificarUsuarioComponent,
    IdentificacionDosfaComponent,
    CambioClaveComponent,
    RecuperarClaveComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
