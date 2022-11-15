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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
