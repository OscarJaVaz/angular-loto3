import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Usuarioo } from '../models/usuarioo';
import { Estado } from '../models/estado';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  getByUsuarioo(usuarioo: string):Observable<any> {
    return this.http.get(Constants.HOST + '/instructor/getByUsuarioo' + Usuarioo)
  }

  getByEstado(estado: string):Observable<any> {
    return this.http.get(Constants.HOST + '/instructor/getByEstado' + Estado)
  }
}
