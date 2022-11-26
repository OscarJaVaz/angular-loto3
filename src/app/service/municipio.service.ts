import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {

  constructor(private http: HttpClient) { }

  getByEstado(estado: string):Observable<any> {
    return this.http.get(Constants.HOST + '/municipio/getByEstado' + Estado)
  }
}
