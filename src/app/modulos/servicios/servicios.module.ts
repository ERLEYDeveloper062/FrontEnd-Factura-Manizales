import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { ListarServicioComponent } from './listar-servicio/listar-servicio.component';
import { ListarServiciosComponent } from './listar-servicios/listar-servicios.component';
import { RegistrarServiciosComponent } from './registrar-servicios/registrar-servicios.component';
import { EliminarServiciosComponent } from './eliminar-servicios/eliminar-servicios.component';
import { EditarServiciosComponent } from './editar-servicios/editar-servicios.component';


@NgModule({
  declarations: [
    ListarServicioComponent,
    ListarServiciosComponent,
    RegistrarServiciosComponent,
    EliminarServiciosComponent,
    EditarServiciosComponent
  ],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ]
})
export class ServiciosModule { }
