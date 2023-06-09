import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { registro } from 'src/app/clases/registro';
import { ApiDBserviceService } from 'src/app/services/api-dbservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  listadoUsuarios: Array<registro> = [];

  idusuario:number = 0;
  nombre:string = '';
  apellido:string = '';
  email:string = '';
  username:string = '';
  password:string = '';


  constructor(private http: HttpClient, public servicio: ApiDBserviceService){

    Swal.fire({
      icon: 'info',
      title: 'MANEJO DE MANTENIMIENTO',
      text: 'Para editar un usuario dele click y vaya al boton que dice EDITAR',
    });
    
    this.getUsuarios();
    
  }

  //mostrar todos los usuarios
  getUsuarios(){
    this.servicio.getUsuarios().subscribe(resultado =>{
      this.listadoUsuarios = resultado;
      console.log(this.listadoUsuarios);
    
  
    })
  }


  selectUser(user: registro){

    console.log(user);

    if(this.idusuario !== null){

      this.idusuario = user.idusuario;
      this.nombre = user.nombre;
      this.apellido = user.apellido;
      this.email = user.email;
      this.username = user.username;
      this.password = user.password;
      
      
      }
  }
}
