import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Colonia } from '../models/colonia';
import { Municipio } from '../models/municipio';
import { Estado } from '../models/estado';


@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  constructor(private http: HttpClient) { }

  getByColonia(colonia: string):Observable<any> {
    return this.http.get(Constants.HOST + '/direccion/getByColonia' + Colonia)
  }

  getByMunicipio(municipio: string):Observable<any> {
    return this.http.get(Constants.HOST + '/direccion/getByMunicipio' + Municipio)
  }

  getByEstado(estado: string):Observable<any> {
    return this.http.get(Constants.HOST + '/direccion/getByEstado' + Estado)
  }
}
