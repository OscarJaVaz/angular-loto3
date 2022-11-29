import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  guardar(municipio: Municipio):Observable<any> {
    return this.http.post(Constants.HOST + '/municipio/save' + municipio)
  }

  getMunicipio():Observable<any> {
    return this.http.get(Constants.HOST + '/municipio/getMunicipio')
  }

  borrar(id: number):Observable<any> {
    return this.http.post(Constants.HOST + '/municipio/delete' + id)
  }

}
