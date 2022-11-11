import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./view/home/home.component";
import {DonativosComponent} from "./view/donativos/donativos.component";
import { ContactoComponent } from './view/contacto/contacto.component';
import { IsesionComponent } from './view/isesion/isesion.component';
import { RegistroComponent } from './view/registro/registro.component';
import { RecuperarComponent } from './view/recuperar/recuperar.component';
import { MenuComponent } from './cabecera/menu/menu.component';
import { ActividadesComponent } from './view/actividades/actividades.component';
import { CampanaComponent } from './view/campana/campana.component';
import { UsuarioperfilComponent } from './view/usuarioperfil/usuarioperfil.component';
import { EditarusuComponent } from './view/editarusu/editarusu.component';
import { ActivityComponent } from './view/activity/activity.component';
import { RegistroactComponent } from './view/registroact/registroact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data:{title: 'Fundacion Loto Tr3s A.C'}},
  {path: 'donaciones', component: DonativosComponent, data:{title: 'LotoTres A.C Donativos'}},
  {path: 'isesion', component: IsesionComponent, data:{title: 'LotoTres A.C Sesion'}},
  {path: 'contacto', component: ContactoComponent, data:{title: 'LotoTres A.C Contacto'}},
  {path: 'registro', component: RegistroComponent, data:{title: 'LotoTres A.C Registro'}},
  {path: 'recuperar', component: RecuperarComponent, data:{title: 'LotoTres A.C Recuperar'}},
  {path: 'menu', component: MenuComponent, data:{title: 'LotoTres Menu'}},
  {path: 'actividades', component: ActividadesComponent, data:{title: 'LotoTres Actividades'}},
  {path: 'campaña', component: CampanaComponent, data:{title: 'lOTOtRES Campaña'} },
  {path: 'perfil', component: UsuarioperfilComponent, data:{title: 'LotoTres Perfil'}},
  {path: 'editar', component: EditarusuComponent, data:{title:'LotoTres Editar'}},
  {path: 'actividad', component: ActivityComponent, data:{title: 'LotoTres Activity'}},
  {path: 'registrarse', component: RegistroactComponent, data:{title: 'LotoTres Registroact'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, DonativosComponent, IsesionComponent, ContactoComponent, RegistroComponent, RecuperarComponent,
   MenuComponent, ActividadesComponent, CampanaComponent, UsuarioperfilComponent, EditarusuComponent,
  ActivityComponent, RegistroactComponent];
