import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Donantegeneral } from '../models/donantegeneral';

@Injectable({
  providedIn: 'root'
})
export class DonanteGeneralService {

  // @ts-ignore
  constructor(private http: HttpClient) { }

  guardar(donante:Donantegeneral):Observable<any> {
    return this.http.post(Constants.HOST + '/donante/save' , donante)
  }

  getDonante():Observable<any> {
    return this.http.get(Constants.HOST + '/donante/getDonante/').pipe(
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
    return this.http.delete(Constants.HOST + '/donante/delete' + id).pipe(
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
