import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Municipio } from '../models/municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  guardar(municipio:Municipio):Observable<any> {
    return this.http.post(Constants.HOST + '/municipio/save' , municipio)
  }

  getMunicipio():Observable<any> {
    return this.http.get(Constants.HOST + '/municipio/getMunicipio').pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  borrar(id: number):Observable<any> {
    return this.http.delete(Constants.HOST + '/municipio/delete' + id).pipe(
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
