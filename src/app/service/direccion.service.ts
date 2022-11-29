import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";


@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }

  guardar(direccion:Direccion):Observable<any> {
    return this.http.post(Constants.HOST + '/direccion/save' + direccion)
  }

  getDirreccion():Observable<any> {
    return this.http.get(Constants.HOST + '/direccion/getDireccion')
  }

  borrar(id:number):Observable<any> {
    return this.http.post(Constants.HOST + '/direccion/delete' + id)
  }
}
