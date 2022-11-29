import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";


@Injectable({
  providedIn: 'root'
})
export class ColoniaService {

  constructor(private http: HttpClient) { }

  guardar(colonia:Colonia):Observable<any> {
    return this.http.post(Constants.HOST + '/colonia/save' + colonia)
  }

  getColonia():Observable<any> {
    return this.http.get(Constants.HOST + 'colonia/getColonia')
  }

  delete(id:number):Observable<any> {
    return this.http.get(Constants.HOST + '/colonia/delete' + id)
  }
}
