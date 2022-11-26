import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Usuarioo } from '../models/usuarioo';
import { Actividad } from '../models/actividad';
import { Instructor } from '../models/instructor';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  getByActividad(actividad: string):Observable<any> {
    return this.http.get(Constants.HOST + '/asistencia/getByActividad' + Actividad)
  }

  getByUsuarioo(usuarioo: string):Observable<any> {
    return this.http.get(Constants.HOST + '/asistencia/getByUsuarioo' + Usuarioo)
  }

  getByInstructor(usuarioo: string):Observable<any> {
    return this.http.get(Constants.HOST + '/asistencia/getByInstructor' + Instructor)
  }
  
}
