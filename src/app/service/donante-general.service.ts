import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class DonanteGeneralService {

  constructor(private http: HttpClient) { }

   guardar(donante:Donante):Observable<any> {
    return this.http.post(Constants.HOST + '/donante/save' + donante)
  }

  getDonante():Observable<any> {
    return this.http.get(Constants.HOST + '/donante/getDonante')
  }
  
  borrar(id:number):Observable<any> {
    return this.http.post(Constants.HOST + '/donante/delete' + id)
  }
}
