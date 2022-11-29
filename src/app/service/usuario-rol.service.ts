import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Rol } from '../models/rol';


@Injectable({
  providedIn: 'root'
})
export class UsuarioRolService {

  constructor(private http: HttpClient) { }

  nuevo(rol:Rol):Observable<any> {
    return this.http.post(Constants.HOST + '/rol/nuevo' , rol)
  }

  getRoles():Observable<any> {
    return this.http.get(Constants.HOST + '/rol/getRoles/' ).pipe(
    map( value=>{
  return value;
    }),
catchError( err => {
throw err;
console.log(err);
  })
    );
  }

  getRol():Observable<any> {
    return this.http.get(Constants.HOST + '/rol/getRol/' ).pipe(
      map( value=>{
    return value;
      }),
  catchError( err => {
  throw err;
  console.log(err);
    })
      );
    }
  
  borrar(id:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/rol/delete/' + id  ).pipe(
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
