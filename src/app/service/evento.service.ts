import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import {Evento} from "../models/evento";


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  guardar(evento:Evento):Observable<any> {
    return this.http.post(Constants.HOST + '/evento/save' , evento)
  }

  getEvento():Observable<any> {
    return this.http.get(Constants.HOST + '/evento/getEvento' ).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  borrar(id:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/evento/delete/' + id).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }
}
