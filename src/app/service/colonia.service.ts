import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Municipio } from '../models/municipio';

@Injectable({
  providedIn: 'root'
})
export class ColoniaService {

  constructor(private http: HttpClient) { }

  getByMunicipio(municipio: string):Observable<any> {
    return this.http.get(Constants.HOST + '/colonia/getByMunicipio' + Municipio)
  }
}
