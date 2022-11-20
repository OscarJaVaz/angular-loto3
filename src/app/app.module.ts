import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './cabecera/menu/menu.component';
import { HomeComponent } from './view/home/home.component';
import { DonativosComponent } from './view/donativos/donativos.component';
import { IsesionComponent } from './view/isesion/isesion.component';
import { ContactoComponent } from './view/contacto/contacto.component';
import { RegistroComponent } from './view/registro/registro.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SliderComponent } from './app/slider/slider.component';
import { RecuperarComponent } from './view/recuperar/recuperar.component';
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
import { InstructorComponent } from './view/instructor/instructor.component';
import { IperfilComponent } from './view/iperfil/iperfil.component';
import { IeditarComponent } from './view/ieditar/ieditar.component';
import { IregistrarseComponent } from './view/iregistrarse/iregistrarse.component';
import { IhorariosComponent } from './view/ihorarios/ihorarios.component';
import { IalumnosComponent } from './view/ialumnos/ialumnos.component';
import { IactividadComponent } from './view/iactividad/iactividad.component';
import { GhorariosComponent } from './view/ghorarios/ghorarios.component';
import { EEventoComponent } from './view/e-evento/e-evento.component';
import { EActividadComponent } from './view/e-actividad/e-actividad.component';
import { TarjetasComponent } from './cabecera/tarjetas/tarjetas.component';
import {NgxSpinnerModule} from "ngx-spinner";



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RoutingComponents,
    DonativosComponent,
    IsesionComponent,
    ContactoComponent,
    RegistroComponent,
    FooterComponent,
    SliderComponent,
    RecuperarComponent,
    ActividadesComponent,
    CampanaComponent,
    UsuarioperfilComponent,
    EditarusuComponent,
    ActivityComponent,
    RegistroactComponent,
    HorariosComponent,
    AdminComponent,
    GactividadComponent,
    GalumnosComponent,
    GdonadoresComponent,
    GeventosComponent,
    CrearactComponent,
    CreardonComponent,
    CreareventComponent,
    InstructorComponent,
    IperfilComponent,
    IeditarComponent,
    IregistrarseComponent,
    IhorariosComponent,
    IalumnosComponent,
    IactividadComponent,
    GhorariosComponent,
    EEventoComponent,
    EActividadComponent,
    TarjetasComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
