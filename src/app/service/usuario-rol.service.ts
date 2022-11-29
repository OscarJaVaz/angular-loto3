import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";


@Injectable({
  providedIn: 'root'
})
export class UsuarioRolService {

  constructor(private http: HttpClient) { }

  nuevo(rol:Rol):Observable<any> {
    return this.http.post(Constants.HOST + '/rol/nuevo' + rol)
  }

  getRoles():Observable<any> {
    return this.http.get(Constants.HOST + '/rol/getRoles/' )
  }

  getRol():Observable<any> {
    return this.http.get(Constants.HOST + '/rol/getRol/' )
  }
  
  borrar(id:number):Observable<any> {
    return this.http.post(Constants.HOST + '/rol/delete/' + id  )
  }
}
