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
import { HorariosComponent } from './view/horarios/horarios.component';
import { AdminComponent } from './view/admin/admin.component';
import { GactividadComponent } from './view/gactividad/gactividad.component';
import { GalumnosComponent } from './view/galumnos/galumnos.component';
import { GdonadoresComponent } from './view/gdonadores/gdonadores.component';
import { GeventosComponent } from './view/geventos/geventos.component';
import { CrearactComponent } from './view/crearact/crearact.component';
import { CreardonComponent } from './view/creardon/creardon.component';
import { CreareventComponent } from './view/crearevent/crearevent.component';

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
  {path: 'horarios', component: HorariosComponent, data:{title: 'LotoTres Horarios'}},
  {path: 'admin', component: AdminComponent, data:{title: 'Loto Tres Admin'}},
  {path: 'gactividad', component: GactividadComponent, data:{title: 'Loto Tres GActividad'}},
  {path: 'galumnos', component: GalumnosComponent, data:{title: 'Loto Tres GAlumnos'}},
  {path: 'gdonadores', component: GdonadoresComponent, data:{title: 'Loto Tres GDonadores'}},
  {path: 'geventos', component: GeventosComponent, data:{title: 'Loto Tres GEventos'}},
  {path: 'crearact', component: CrearactComponent, data:{title: 'Loto Tres Crear actividad'}},
  {path: 'creardon', component: CreardonComponent, data:{title: 'Loto Tres Crear donacion'}},
  {path: 'crearevent', component: CreareventComponent, data:{title: 'Loto Tres Crear Evento'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomeComponent, DonativosComponent, IsesionComponent, ContactoComponent, RegistroComponent, RecuperarComponent,
   MenuComponent, ActividadesComponent, CampanaComponent, UsuarioperfilComponent, EditarusuComponent,
  ActivityComponent, RegistroactComponent, HorariosComponent, AdminComponent, GactividadComponent,
  GalumnosComponent, GdonadoresComponent, GeventosComponent, CrearactComponent, CreardonComponent,
  CreareventComponent];
