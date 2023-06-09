import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { NavUsuarioComponent } from './components/nav-usuario/nav-usuario.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { RegistrarLibroComponent } from './components/registrar-libro/registrar-libro.component';
import { PrestarComponent } from './components/prestar/prestar.component';
import { LibroAdminComponent } from './components/libro-admin/libro-admin.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    HomeUsuarioComponent,
    NavUsuarioComponent,
    NavAdminComponent,
    HomeAdminComponent,
    RegistrarLibroComponent,
    PrestarComponent,
    LibroAdminComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
