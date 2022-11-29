import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  nuevo(ussurioooo:Ussurioooo):Observable<any> {
    return this.http.post(Constants.HOST + '/ussurioooo/nuevo/' + ussurioooo)
  }

  getUssurioooos():Observable<any> {
    return this.http.get(Constants.HOST + '/ussurioooo/getUssurioooos/')
  }

  getUssurioooo():Observable<any> {
    return this.http.get(Constants.HOST + '/ussurioooo/getUssurioooo/')
  }

  borrar(id:number):Observable<any> {
    return this.http.get(Constants.HOST + '/ussurioooo/delete/'+id)
  }
}
