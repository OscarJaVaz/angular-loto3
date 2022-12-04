import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import {Donacion} from "../models/donacion";

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  constructor(private http: HttpClient) { }

  nuevo(donacion:Donacion ):Observable<any> {
    return this.http.post(Constants.HOST + '/donacion/nuevo' , donacion)
  }

  getDonacion():Observable<any> {
    return this.http.get(Constants.HOST + '/donacion/getDonacion').pipe(
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
    return this.http.delete(Constants.HOST + '/donacion/delete' + id).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  generatePdf(id: number): Observable<any> {
    return this.http.get(Constants.HOST + '/donacion/generatePdf/' + id, {observe:'response',responseType: 'blob'})
  }
}
