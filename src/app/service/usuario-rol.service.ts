import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Usuarioo } from '../models/usuarioo';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRolService {

  constructor(private http: HttpClient) { }

  getByUsuarioo(usuarioo: string):Observable<any> {
    return this.http.get(Constants.HOST + '/usuario_rol/getByUsuarioo' + Usuarioo)
  }

  getByRol(rol: string):Observable<any> {
    return this.http.get(Constants.HOST + '/usuario_rol/getByRol/' + Rol)
  }

}
