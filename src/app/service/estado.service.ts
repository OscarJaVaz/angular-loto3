import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }

  guardar(estado:Estado):Observable<any> {
    return this.http.post(Constants.HOST + '/estado/save', estado)
  }

  getEstado():Observable<any> {
    return this.http.get(Constants.HOST + '/estado/getEstado').pipe(
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
    return this.http.delete(Constants.HOST + '/estado/delete' + id).pipe(
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
