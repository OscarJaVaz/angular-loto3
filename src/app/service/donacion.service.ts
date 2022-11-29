import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  constructor(private http: HttpClient) { }

  guardar(donacion:Donacion ):Observable<any> {
    return this.http.get(Constants.HOST + '/donacion/save' + donacion)
  }

  getDonacion():Observable<any> {
    return this.http.get(Constants.HOST + '/donacion/getDonacion')
  }

  borrar(id: number):Observable<any> {
    return this.http.post(Constants.HOST + '/donacion/delete' + id)
  }
}