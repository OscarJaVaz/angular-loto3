import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";


@Injectable({
  providedIn: 'root'
})
export class ArchivoCargaService {

  constructor(private http: HttpClient) { }

  nuevo (archivo:Archivo):Observable<any> {
    return this.http.post(Constants.HOST + '/archivo/nuevo' + archivo)
  }

  getUssurioooo(id_usuario:number):Observable<any> {
    return this.http.post(Constants.HOST + '/archivo/getUssurioooo' + id_usuario)
  }

  getArchivos ():Observable<any> {
    return this.http.get(Constants.HOST + '/archivo/getArchivos'  )
  }

  getArchivo ():Observable<any> {
    return this.http.get(Constants.HOST + '/archivo/getArchivo'  )
  }

  borrar (id:number):Observable<any> {
    return this.http.post(Constants.HOST + '/archivo/delete' + id )
  }
}
