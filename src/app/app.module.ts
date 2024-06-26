import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './publico/pagina-maestra/encabezado/encabezado.component';
import { PiePaginaComponent } from './publico/pagina-maestra/pie-pagina/pie-pagina.component';
import { MenuLateralComponent } from './publico/pagina-maestra/menu-lateral/menu-lateral.component';
import { RutaNoEncontradaComponent } from './publico/error/ruta-no-encontrada/ruta-no-encontrada.component';
import { ErrorServidorComponent } from './publico/error/error-servidor/error-servidor.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './publico/pagina-maestra/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagosModule } from './modulos/pagos/pagos.module';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PiePaginaComponent,
    MenuLateralComponent,
    RutaNoEncontradaComponent,
    ErrorServidorComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    PagosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
