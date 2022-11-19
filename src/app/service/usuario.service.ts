import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getByRol(rol: string):Observable<any> {
    return this.http.get(Constants.HOST + '/usuario/getByRol/' + rol)
  }
}
