import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { TablaComponent } from './componentes/tabla/tabla.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'repos', component: TablaComponent },
  // Otras rutas si tienes más componentes y vistas
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
