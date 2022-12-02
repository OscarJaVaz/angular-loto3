import { Injectable } from '@angular/core';

interface Graficas {
  name: string;
  value: number;
}






@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  
  private data: Graficas[] = [
    {
      "name": "Cliquearon la pag",
      "value": Math.random() * 250
    },
    {
      "name": "Cliquearon actividades",
      "value": Math.random() * 250
    },
    {
      "name": "Checaron testimoniales",
      "value": Math.random() * 250
    },
      {
      "name": "Checaron redes sociales",
      "value": Math.random() * 250
    }
  ];
 
get graficaData(){
  return this.data;
}

randomData(){
  this.data = [

    {
      "name": "Cliquearon la pag",
      "value": Math.random() * 250
    },
    {
      "name": "Cliquearon actividades",
      "value": Math.random() * 250
    },
    {
      "name": "Checaron testimoniales",
      "value": Math.random() * 250
    },
      {
      "name": "Checaron redes sociales",
      "value": Math.random() * 250
    }
  ]
}




}
