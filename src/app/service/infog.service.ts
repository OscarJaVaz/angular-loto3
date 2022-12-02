import { Injectable } from '@angular/core';


interface info {
  name: string;
  value: number;
}


@Injectable({
  providedIn: 'root'
})
export class InfogService {



  private data: info[]= [
    {
      "name": "Cliquearon la pag",
      "value": Math.random() * 1000
    },
    {
      "name": "Cliquearon actividades",
      "value": Math.random() * 1000
    },
    {
      "name": "Checaron testimoniales",
      "value": Math.random() * 1000
    },
      {
      "name": "Checaron redes sociales",
      "value": Math.random() * 1000
    }
  ];

  get infos (){
    return this.data;
  }

  randomData(){
    return this.data = [
      {
        "name": "Cliquearon la pag",
        "value": Math.random() * 1000
      },
      {
        "name": "Cliquearon actividades",
        "value": Math.random() * 1000
      },
      {
        "name": "Checaron testimoniales",
        "value": Math.random() * 1000
      },
        {
        "name": "Checaron redes sociales",
        "value": Math.random() * 1000
      }
    ];
  }
  constructor() { }
}
