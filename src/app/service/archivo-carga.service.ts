import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { ArchivoCarga } from '../models/archivo-carga';


@Injectable({
  providedIn: 'root'
})
export class ArchivoCargaService {

  constructor(private http: HttpClient) { }

  nuevo (archivo:ArchivoCarga):Observable<any> {
    return this.http.post(Constants.HOST + '/archivo/nuevo' , archivo)
  }

  getUssurioooo(id_usuario:number):Observable<any> {
    return this.http.post(Constants.HOST + '/archivo/getUssurioooo' , id_usuario)
  }

  getArchivos ():Observable<any> {
    return this.http.get(Constants.HOST + '/archivo/getArchivos'  ).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  getArchivo ():Observable<any> {
    return this.http.get(Constants.HOST + '/archivo/getArchivo'  ).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  borrar (id:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/archivo/delete' + id ).pipe(
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
