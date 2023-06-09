import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { estantes } from 'src/app/clases/estantes';
import { ApiDBserviceService } from 'src/app/services/api-dbservice.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrar-estante',
  templateUrl: './registrar-estante.component.html',
  styleUrls: ['./registrar-estante.component.css']
})
export class RegistrarEstanteComponent {

  id_estante:number = 0;
  nombre:string = '';
  genero_lib:string = '';


  listadoEstantes: Array<estantes> = [];



  
  constructor(private http: HttpClient, public servicio: ApiDBserviceService){
    this.getEstantes();
    
  }


  //guardar estante
regEstante(){

  let objEstante:estantes = new estantes();

  objEstante.id_estante = this.id_estante;
  objEstante.nombre = this.nombre;
  objEstante.genero_lib = this.genero_lib;


  this.servicio.guardarEstante(objEstante).subscribe(resultado =>{
    if(resultado){
      this.limpiar();
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'El estante se ha registrado con exito.',
        confirmButtonText: 'Aceptar'
      });
      
    }
  })
}
  
  //obtener todos los estantes
  getEstantes(){
    this.servicio.getEstantes().subscribe(resultado =>{
      this.listadoEstantes = resultado;
    })
  }

  //seleccionar registro
  selectEstantes(objEstante: estantes){

    this.id_estante = objEstante.id_estante;
    this.nombre = objEstante.nombre;
    this.genero_lib = objEstante.genero_lib;
  }



limpiar(){
  this.id_estante = 0;
  this.nombre = '';
  this.genero_lib = '';
}

}
