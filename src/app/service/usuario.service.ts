import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Usuarioo } from '../models/usuarioo';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  nuevo(ussurioooo:Usuarioo):Observable<any> {
    return this.http.post(Constants.HOST + '/ussurioooo/nuevo/' , ussurioooo)
  }

 

  getUser():Observable<any> {
    return this.http.get(Constants.HOST + '/ussurioooo/getUser/').pipe(
      map( value=>{
    return value;
      }),
  catchError( err => {
  throw err;
  console.log(err);
    })
      );
    }

    getUssurioooos():Observable<any> {
      return this.http.get(Constants.HOST + '/ussurioooo/getUssurioooos/').pipe(
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
    return this.http.delete(Constants.HOST + '/ussurioooo/delete/'+id).pipe(
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

