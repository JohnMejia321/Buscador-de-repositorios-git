import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  nombre: string = '';

  constructor(private service:ServicioService,private route: ActivatedRoute) { 
 
  }

  ngOnInit(): void {
     this.nombre= this.service.getNombre();
     // this.service.fetchDataFromAPI(this.nombre);
      console.log(this.nombre)
      this.nombre="";
    };
    
  

  get datosApi(){
    return this.service.data
  }



}