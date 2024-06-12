import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarServicioComponent } from './registrar-servicio/registrar-servicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistrarServicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ServiciosPublicosModule { }
