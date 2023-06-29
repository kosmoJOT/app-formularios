import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//Modulos
import { SharedModule } from './shared/shared.module';
//Componentes
import { CrearRegistrosComponent } from './components/crear-registros/crear-registros.component';

@NgModule({
  declarations: [
    AppComponent,
    //Componentes
    CrearRegistrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Modulos
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
