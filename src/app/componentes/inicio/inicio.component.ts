import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ServicioService } from 'src/app/servicios/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  nombre: string = '';

  constructor(private service:ServicioService,private router:Router) { }

  ngOnInit(): void {
  }

  capturarNombre(){
    this.service.setNombre(this.nombre);
  }

  onSubmit() {
    // Aquí puedes realizar cualquier lógica adicional antes de redirigir si es necesario.
    this.router.navigate(['/repos']); // Redirige a la ruta '/otro-componente'
    this.service.fetchDataFromAPI(this.nombre);
  }

}
