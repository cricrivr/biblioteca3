import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeUsuarioComponent } from './components/home-usuario/home-usuario.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { RegistrarLibroComponent } from './components/registrar-libro/registrar-libro.component';
import { PrestarComponent } from './components/prestar/prestar.component';
import { LibroAdminComponent } from './components/libro-admin/libro-admin.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistrarEstanteComponent } from './components/registrar-estante/registrar-estante.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeUsuarioComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'reglib', component: RegistrarLibroComponent },
  { path: 'prestar-libro', component: PrestarComponent },
  { path: 'libroadmin', component: LibroAdminComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'estantes', component: RegistrarEstanteComponent},
  { path: '', component: HomeUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
