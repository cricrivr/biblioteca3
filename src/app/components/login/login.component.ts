import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDBserviceService } from 'src/app/services/api-dbservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: HttpClient, private router: Router, public servicio: ApiDBserviceService) { 
    
  }

  login() {
  console.log('hola');
  
    this.http.post<any>('http://127.0.0.1:8000/api/login',{}).subscribe(response => {
      console.log(response.resultado);
      console.log(response.estado);

      if (response.resultado == true){

        if(response.estado == 1){
          this.router.navigate(['home-admin'])
        }else{
          this.router.navigate(['home'])
        }
        // this.router.navigateByUrl(response.redirect);
        //   console.log(true);
        //   Swal.fire('¡Exito!', 'Se ha loguea/do correctamente', 'success');

      }
    });
      
  }

  
  
  
}
