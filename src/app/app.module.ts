import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa tu módulo de rutas
import { RouterModule } from '@angular/router'; // Asegúrate de que RouterModule esté importado
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { GuiaComponent } from './page/guia/guia.component';
import { PoliticaComponent } from './page/politica/politica.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GuiaComponent,
    PoliticaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Importa tu módulo de rutas aquí
    RouterModule,
    PdfViewerModule // Necesario para `<router-outlet>`
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
