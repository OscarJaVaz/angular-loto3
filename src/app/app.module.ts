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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
