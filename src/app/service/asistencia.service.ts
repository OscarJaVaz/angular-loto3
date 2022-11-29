import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";


@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  nuevo(asistencia:Asistencia):Observable<any> {
    return this.http.post(Constants.HOST + '/asistencia/nuevo' + asistencia)
  }

  getAsistencia():Observable<any> {
    return this.http.get(Constants.HOST + '/asistencia/getAsistencia' )
  }

  borrar(id:number):Observable<any> {
    return this.http.post(Constants.HOST + '/asistencia/delete' + id)
  }
  
}
