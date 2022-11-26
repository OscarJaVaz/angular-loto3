import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Usuarioo } from '../models/usuarioo';

@Injectable({
  providedIn: 'root'
})
export class ArchivoCargaService {

  constructor(private http: HttpClient) { }

  getByUsuarioo(usuarioo: string):Observable<any> {
    return this.http.get(Constants.HOST + '/archivo_carga/getByUsuarioo' + Usuarioo)
  }
}
