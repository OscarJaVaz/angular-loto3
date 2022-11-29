import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Asistencia } from '../models/asistencia';


@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  nuevo(asistencia: Asistencia):Observable<any> {
    return this.http.post(Constants.HOST + '/asistencia/nuevo' ,asistencia)
  }

  getAsistencia():Observable<any> {
    return this.http.get(Constants.HOST + '/asistencia/getAsistencia' ).pipe(
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
    return this.http.delete(Constants.HOST + '/asistencia/delete' + id).pipe(
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
