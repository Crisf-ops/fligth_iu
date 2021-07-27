import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VueloComponent } from './components/vuelo/vuelo/vuelo.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';

const routes: Routes = [
  {path: 'vuelos', component: VueloComponent},
  {path: 'cliente', component: ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
