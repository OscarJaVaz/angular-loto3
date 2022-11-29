import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  guardar(estado:Estado):Observable<any> {
    return this.http.post(Constants.HOST + '/estado/save' + estado)
  }

  getEstado():Observable<any> {
    return this.http.get(Constants.HOST + '/estado/getEstado')
  }

  borrar(id: number):Observable<any> {
    return this.http.post(Constants.HOST + '/estado/delete' + id)
  }
}
