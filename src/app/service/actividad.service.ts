import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {Constants} from "../constants/constants";
import {HttpClient} from "@angular/common/http";
import { Actividad } from '../models/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http: HttpClient) { }
  
  nuevo (actividad:Actividad):Observable<any> {
    return this.http.post(Constants.HOST + '/actividad/nuevo' , actividad)
  }

  getActividades ():Observable<any> {
    return this.http.get(Constants.HOST + '/actividad/getActividades' ).pipe (
      map (value=> {
        return value;
      }),
     catchError (err=> {
        throw err;
        console.log(err);
      })
    );
  }

  getActividad ():Observable<any> {
    return this.http.get(Constants.HOST + '/actividad/getActividad' ).pipe (
      map (value=> {
        return value;
      }),
     catchError (err=> {
        throw err;
        console.log(err);
      })
    );
  }

  /*delete (id:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/actividad/delete' + id )
  }*/
 /* delete (id_actividad:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/actividad/delete' + id_actividad ).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }*/

  /*ELIMINAR BY OSCAR*/
  delete(id_actividad: number):Observable<any>{
    return this.http.delete(Constants.HOST + '/actividad/delete' + id_actividad).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }
  
  /*generatePdf(id_actividad: number): Observable<any> {
    return this.http.get(Constants.HOST + '/plan/generatePdf/' + id_actividad, {observe:'response',responseType: 'blob'})
  }*/
}
