import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VueloComponent } from './components/vuelo/vuelo/vuelo.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path: 'vuelos', component: VueloComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'main', component: MainComponent},
  {path: '**', pathMatch:'full', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
