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
  estado:number = 0;



  constructor(private http: HttpClient, public servicio: ApiDBserviceService){
    this.getUsuarios();

    Swal.fire({
      icon: 'info',
      title: 'MANEJO DE MANTENIMIENTO',
      text: 'Para editar un usuario dele click y vaya al boton que dice EDITAR',
    });
    
    
  }


  saveUser(){
    let objRegistro:registro = new registro();
  
    objRegistro.nombre = this.nombre;
    objRegistro.apellido = this.apellido;
    objRegistro.username = this.username;
    objRegistro.email = this.email;
    objRegistro.password = this.password;
    objRegistro.estado = this.estado;
    objRegistro.idusuario = this.idusuario;
  
    this.servicio.guardarUsuario(objRegistro).subscribe(resultado =>{
      this.limpiar();
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El usuario se ha registrado con exito.',
        confirmButtonText: 'Aceptar'
      });
    })
  }
 

  //mostrar todos los usuarios
  getUsuarios(){
    this.servicio.getUsuarios().subscribe(resultado =>{
      this.listadoUsuarios = resultado;
      console.log(this.listadoUsuarios);
  
    })
  }

//seleccionar usuario
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


  
limpiar(){

  this.nombre = '';
  this.apellido = '';
  this.username = '';
  this.email = '';
  this.password = '';
}
}
