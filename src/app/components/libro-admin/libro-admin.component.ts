import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { estantes } from 'src/app/clases/estantes';
import { libro } from 'src/app/clases/libro';
import { ApiDBserviceService } from 'src/app/services/api-dbservice.service';

@Component({
  selector: 'app-libro-admin',
  templateUrl: './libro-admin.component.html',
  styleUrls: ['./libro-admin.component.css']
})
export class LibroAdminComponent {
  
  
  listadoLibros: Array<libro> = [];
  listadoEstantes: Array<estantes> = [];

  
  id_libro:number = 0;
  nombre:string = '';
  autor:string = '';
  genero:string = '';
  editorial:string = '';
  estado:number = 0;
  id_estante:number = 0;

  nombre_usuario:string = '';
  genero_lib:string = '';
  fecha:string = '';
  fechaFin:string = '';


  date = new Date();
format = 'yyyy/MM/dd';
//myDate = '2019-06-29';
locale = 'en-US';
formattedDate = formatDate(this.date, this.format, this.locale);
  
  constructor(private http: HttpClient, public servicio: ApiDBserviceService){
    this.getLibros();
  }

  

  ngOnInit():void{
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const dia = String(today.getDate() + 3).padStart(2, '0');

    this.fecha = `${yyyy}-${mm}-${dd}`;
    this.fechaFin = `${yyyy}-${mm}-${dd}`;

    }


  //obtener todos los libros
  getLibros(){
    this.servicio.getLibros().subscribe(resultado =>{
      this.listadoLibros = resultado;
  
    })
  }

  selectEstantes(objEstantes: estantes){
console.log(objEstantes);

this.id_estante =objEstantes.id_estante;
this.nombre = objEstantes.nombre;
this.genero = objEstantes.genero_lib;

  }


   //seleccionar registro
   selectLibros(libro:libro){
    console.log(libro)

if(this.id_libro !== null){

this.id_libro = libro.id_libro;
this.nombre = libro.nombre;

}
  }

  limpiar(){
    this.id_libro = 0;
    this.nombre = '';
    this.fecha = '';
    this.fechaFin = '';
  }



}
