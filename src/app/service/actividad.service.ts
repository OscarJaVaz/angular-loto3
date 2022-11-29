import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Constants} from "../constants/constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor() { }
  
  nuevo (actividad:Actividad):Observable<any> {
    return this.http.post(Constants.HOST + '/actividad/nuevo' + actividad)
  }

  getActividades ():Observable<any> {
    return this.http.get(Constants.HOST + '/actividad/getActividades' )
  }

  getActividad ():Observable<any> {
    return this.http.get(Constants.HOST + '/actividad/getActividad' )
  }

  borrar (id:number):Observable<any> {
    return this.http.post(Constants.HOST + '/archivo/delete' + id )
  }
}
