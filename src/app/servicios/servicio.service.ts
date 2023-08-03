import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  data:any[]=[]
  private nombre: string = '';

  constructor(private httpClient:HttpClient) { }

  getNombre(): string {
    return this.nombre;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }


fetchDataFromAPI(user:string) {
  const apiUrl = `https://api.github.com/users/${user}/repos`; 
  this.httpClient.get<string[]>(apiUrl).subscribe(
    (response:any) => {
      this.data = response;
      console.log(response)
    },
    (error) => {
      console.error('Error al obtener datos desde la API:', error);
    }
  );
}
}