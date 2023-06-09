import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { libro } from 'src/app/clases/libro';
import { ApiDBserviceService } from 'src/app/services/api-dbservice.service';
import { LibroAdminComponent } from '../libro-admin/libro-admin.component';
import { estantes } from 'src/app/clases/estantes';
import Swal from 'sweetalert2';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-registrar-libro',
  templateUrl: './registrar-libro.component.html',
  styleUrls: ['./registrar-libro.component.css']
})
export class RegistrarLibroComponent {


  id_libro:number = 0;
  nombre:string = '';
  autor:string = '';
  genero:string = '';
  editorial:string = '';
  estado:number = 0;
  id_estante:number = 0;
  


  listadoLibros: Array<libro> = [];
  listadoEstantes: Array<estantes> = [];

  
  constructor(private http: HttpClient, public servicio: ApiDBserviceService){
    this.getLibros();
    this.getEstantes();
    
  }

  //guardar libro
  guardarLib(){
    let objLibros:libro = new libro();

    objLibros.id_libro = this.id_libro;
    objLibros.nombre = this.nombre;
    objLibros.autor = this.autor;
    objLibros.genero = this.genero;
    objLibros.editorial = this.editorial;
    objLibros.estado = this.estado;
    objLibros.id_estante = this.id_estante;

    this.servicio.guardarLibros(objLibros).subscribe(resultado => {
      if(resultado){
        this.limpiar();
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: 'El libro se ha registrado con exito.',
          confirmButtonText: 'Aceptar'
        });
      }
    })

  }

  //obtener todos los libros
  getLibros(){
    this.servicio.getLibros().subscribe(resultado =>{
      this.listadoLibros = resultado;
  
    })
  }

  //obtener todos los libros
  getEstantes(){
    this.servicio.getEstantes().subscribe(resultado =>{
      this.listadoEstantes = resultado;
  
    })
  }

  //seleccionar estante
  selectEstantes(objEstante: estantes){

    this.id_estante = objEstante.id_estante;
  }

      //buscar vehiculo según se id
buscarLibroID(id_libro:number){
  this.servicio.libroID(id_libro).subscribe(resultado => {
 
   })
 }


 // FILTRAR POR AUTOR

 //libros de anna banks
 AnnaBanks(){
  this.servicio.annaBanks().subscribe(resultado => {
if(resultado){
  this.listadoLibros = resultado;
}

  })
 }

 //libros de Neil Gaiman
 neil(){
  this.servicio.neil().subscribe(resultado => {
    if(resultado){
      this.listadoLibros = resultado;
    }
  })
 }

 //libros de Alex Mirez
 alexMirez(){
  this.servicio.AlexMirex().subscribe(resultado => {
    if(resultado){
      this.listadoLibros = resultado;
    }
  })
 }

 // FILTRAR POR GENERO

 //libros de ciencia ficcion
 cienciaFiccion(){
  this.servicio.cienciaficcion().subscribe(resultado => {
    if(resultado){
      this.listadoLibros = resultado;
    }
  })
 }

 fantasia(){
  this.servicio.fantasia().subscribe(resultado =>{
    if(resultado){
      this.listadoLibros = resultado;
    }
  })
 }

 misterio(){
  this.servicio.misterio().subscribe(resultado => {
    if(resultado){
      this.listadoLibros = resultado;
    }
  })
 }


 //seleccionar registro
  selectLibros(libro:libro){
    console.log(libro)

if(this.id_libro !== null){

this.id_libro = libro.id_libro;
this.nombre = libro.nombre;
this.autor = libro.autor;
this.genero = libro.genero;
this.editorial = libro.editorial;
this.estado = libro.estado;
this.id_estante = libro.id_estante;

}
  }

  limpiar(){
    this.id_libro = 0;
    this.nombre = '';
    this.autor = '';
    this.genero = '';
    this.editorial = '';
    this.estado = 0;
    this.id_estante = 0;

  }

}
