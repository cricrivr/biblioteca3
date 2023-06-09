import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { libro } from '../clases/libro';
import { registro } from '../clases/registro';
import { estantes } from '../clases/estantes';
import { prestar } from '../clases/prestar';


@Injectable({
  providedIn: 'root'
})
export class ApiDBserviceService {


  server = 'http://127.0.0.1:8000';

  constructor(public http: HttpClient, private router: Router) { }
  

  
//LIBROS

//guardar o actualizar
guardarLibros(objLibros: libro): Observable<boolean> {
  return  this.http.post<boolean>(this.server + '/api/guardarLib', { 'libro': objLibros});
}

//mostrar todos
getLibros(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/mostrarLib', {});
}

//buscar por id
libroID(id_libro: number): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/buscarID', {});
}



// FILTRAR POR GENEROS

//mostrar libros de accion
accion(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/libroAccion', {});
}

//mostrar libros de fantasia
fantasia(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/libroFantasia', {});
}

//mostrar libros de ciencia ficcion
cienciaficcion(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/libroCienciaFiccion', {});
}

//libros de misterio
misterio(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/misterybooks', {});
  
}



// FILTRAR POR AUTOR

//mostrar libros de ciencia anna banks
annaBanks(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/annabanks', {});
}

//mostrar libros de ciencia ficcion
neil(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/neilGaiman', {});
}

//mostrar libros de ciencia ficcion
AlexMirex(): Observable<Array<libro>>{
  return this.http.post<Array<libro>>(this.server + '/api/alexmirez', {});
}



// REGISTRO

//mostrar usuarios
getUsuarios(): Observable<Array<registro>>{
  return this.http.post<Array<registro>>(this.server + '/api/usuarios', {});
}
//guardar o actualizar
guardarUsuario(objRegistro: registro): Observable<boolean> {
  return  this.http.post<boolean>(this.server + '/api/registrar', { 'registro': objRegistro});
}


//  ESTANTES

//mostrar
getEstantes(): Observable<Array<estantes>>{
  return this.http.post<Array<estantes>>(this.server + '/api/getEstantes', {});
}
//guardar o actualizar
guardarEstante(objEstante: estantes): Observable<boolean> {
  return  this.http.post<boolean>(this.server + '/api/guardarEst', { 'estante': objEstante});
}


// PRESTAR

//guardar prest
savePrest(objPrest: prestar): Observable<boolean> {
  return  this.http.post<boolean>(this.server + '/api/guardarPrest', { 'prestar': objPrest});
}
//mostrar todos
 getPrest(): Observable<Array<prestar>>{
    return this.http.post<Array<prestar>>(this.server + '/api/mostrarPrest', {});
  }
}

