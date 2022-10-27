import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {DonativosComponent} from "./view/donativos/donativos.component";
import { ContactoComponent } from './view/contacto/contacto.component';
import { IsesionComponent } from './view/isesion/isesion.component';
import { RegistroComponent } from './view/registro/registro.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data:{title: 'Fundacion Loto Tr3s A.C'}},
  {path: 'donaciones', component: DonativosComponent, data:{title: 'LotoTres A.C Donativos'}},
  {path: 'isesion', component: IsesionComponent, data:{title: 'LotoTres A.C Sesion'}},
  {path: 'contacto', component: ContactoComponent, data:{title: 'LotoTres A.C Contacto'}},
  {path: 'registro', component: RegistroComponent, data:{title: 'LotoTres A.C Registro'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, DonativosComponent, IsesionComponent, ContactoComponent, RegistroComponent];
