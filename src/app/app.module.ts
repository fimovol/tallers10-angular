import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Modulo1Module } from './modulo1/modulo1.module';
import { SeccionesModule } from './secciones/secciones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Modulo1Module,
    SeccionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
