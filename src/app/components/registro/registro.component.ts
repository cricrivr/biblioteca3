import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { registro } from 'src/app/clases/registro';
import { ApiDBserviceService } from 'src/app/services/api-dbservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

nombre:string = '';
apellido:string = '';
username:string = '';
email:string = '';
password:string = '';
estado:number = 0;
idusuario:number = 0;

constructor(private http: HttpClient, public servicio: ApiDBserviceService){
 
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


limpiar(){

  this.nombre = '';
  this.apellido = '';
  this.username = '';
  this.email = '';
  this.password = '';
}

}
