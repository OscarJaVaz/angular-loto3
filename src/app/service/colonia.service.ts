import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Colonia } from '../models/colonia';


@Injectable({
  providedIn: 'root'
})
export class ColoniaService {

  constructor(private http: HttpClient) { }

  guardar(colonia:Colonia):Observable<any> {
    return this.http.post(Constants.HOST + '/colonia/save' , colonia)
  }

  getColonia():Observable<any> {
    return this.http.get(Constants.HOST + 'colonia/getColonia').pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  delete(id:number):Observable<any> {
    return this.http.delete(Constants.HOST + '/colonia/delete' + id).pipe(
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