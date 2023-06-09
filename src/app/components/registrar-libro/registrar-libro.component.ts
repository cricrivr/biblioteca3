import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { libro } from 'src/app/clases/libro';
import { ApiDBserviceService } from 'src/app/services/api-dbservice.service';
import { LibroAdminComponent } from '../libro-admin/libro-admin.component';
import { estantes } from 'src/app/clases/estantes';

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

  selectEstantes(objEstante: estantes){

    this.id_estante = objEstante.id_estante;
  }

      //buscar vehiculo según se id
buscarLibroID(id_libro:number){
  this.servicio.libroID(id_libro).subscribe(resultado => {
 
   })
 }

 //libros de anna banks
 AnnaBanks(){
  this.servicio.annaBanks().subscribe(resultado => {


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
