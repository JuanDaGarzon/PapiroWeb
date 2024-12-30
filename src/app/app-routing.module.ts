import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './page/inicio/inicio.component';
import { GuiaComponent } from './page/guia/guia.component';
import { PoliticaComponent } from './page/politica/politica.component';


const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "guia", component: GuiaComponent },
  { path: "politica", component: PoliticaComponent},
  { path: "**", pathMatch: "full", redirectTo: "" }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
