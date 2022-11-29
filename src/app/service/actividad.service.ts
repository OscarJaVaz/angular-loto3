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

  borrar (id:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/archivo/delete' + id ) .pipe (
      map (value=> {
        return value;
      }),
     catchError (err=> {
        throw err;
        console.log(err);
      })
    );
  }
}
