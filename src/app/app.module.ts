import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component'; // Importa RouterModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
