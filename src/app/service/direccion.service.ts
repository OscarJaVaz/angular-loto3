import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import {Direccion} from "../models/direccion";


@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }
  /*Asi realiza los post debes importar la clase por eso te marca error.*/
  guardar(direccion:Direccion):Observable<any> {
    return this.http.post(Constants.HOST + '/direccion/save' , direccion)
  }

  /*Asi realiza los metodos consultar*/
  getDirreccion():Observable<any> {
    return this.http.get(Constants.HOST + '/direccion/getDireccion').pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  /*Ale asi realiza los metodos eliminar de favor*/
  borrar(id:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/direccion/delete/'+id).pipe(
    map( value=>{
  return value;
    }),
catchError( err => {
throw err;
console.log(err);
  })
    );
  }
}
