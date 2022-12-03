import { Injectable } from '@angular/core';
import {catchError, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Constants} from "../constants/constants";
import { Instructor } from '../models/instructor';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  private url: string= "http://localhost:8080//instructor/";

  constructor(private http: HttpClient) { }

  guardar(instructor:Instructor):Observable<any> {
    return this.http.post(Constants.HOST + '/instructor/save' , instructor)
  }

  getInstructor():Observable<any> {
    return this.http.get(Constants.HOST + '/instructor/getInstructor' ).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }

  borrar(id: number):Observable<any> {
    return this.http.delete(Constants.HOST + '/instructor/delete' + id).pipe(
      map(value => {
        return value;
      }),
      catchError(err => {
        throw err;
        console.log(err);
      })
    );
  }
}
