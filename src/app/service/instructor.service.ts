import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient) { }

  guardar(instructor: Instructor):Observable<any> {
    return this.http.post(Constants.HOST + '/instructor/save' + instructor)
  }

  getInstructor():Observable<any> {
    return this.http.get(Constants.HOST + '/instructor/getInstructor' )
  }

  borrar(id: number):Observable<any> {
    return this.http.post(Constants.HOST + '/instructor/delete' + id)
  }
}
