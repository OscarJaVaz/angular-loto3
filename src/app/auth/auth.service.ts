import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Usuarioo } from '../models/usuarioo';
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import { Constants } from "../constants/constants";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuarioo: Usuarioo = new Usuarioo();
  private _token: string = '';
  private _tokenRefresh: string = '';

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  get usuarioo(): Usuarioo {
    if (localStorage.getItem('user_fundacion') != null) {
      let localValue = localStorage.getItem('user_fundacion');
      if (localValue == null) {
        return new Usuarioo();
      } else {
        return JSON.parse(localValue) as Usuarioo;
      }
    }
    return new Usuarioo();
  }

  set usuario(value: Usuarioo) {
    this._usuarioo = value;
  }

  guardarUsuarioo(accessToken: string) {
    const payload = this.obtenerDatosToken(accessToken);
    this._usuarioo = new Usuarioo();
    this._usuarioo.correo = payload.user_name;
    this._usuarioo.id_usuario = payload.id_usuario;
    this._usuarioo.telefono = payload.telefono;
    this._usuarioo.nombre = payload.nombre;

    localStorage.setItem('user_fundacion', JSON.stringify(this._usuarioo));
  }

  get token(): string {
    if (this._token != '') {
      return this._token;
    } else if (this._token == '' && localStorage.getItem('token_fundacion') != null) {
      let localValue = localStorage.getItem('token_fundacion');
      if (localValue == null) {
        return '';
      } else {
        return localValue;
      }
    }
    return '';
  }

  set token(value: string) {
    this._token = value;
  }

  get tokenRefresh(): string {
    if (this._tokenRefresh != '') {
      return this._tokenRefresh;
    } else if (this._tokenRefresh == '' && localStorage.getItem('tokenRefresh_fundacion') != null) {
      let localValue = localStorage.getItem('tokenRefresh_fundacion');
      if (localValue == null) {
        return '';
      } else {
        return localValue;
      }
    }
    return '';
  }

  set tokenRefresh(value: string) {
    this._tokenRefresh = value;
  }

  upgradeToken(): Observable<any> {
    const url = Constants.HOST + '/oauth/token';
    const credentials = btoa(Constants.APPNAME + ':' + Constants.APPPASSWORD);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credentials
    });
    const params = new URLSearchParams();
    params.set('grant_type', 'refresh_token');
    params.set('refresh_token', this.tokenRefresh);
    return this.http.post(url, params.toString(), {headers: httpHeaders});
  }

  guardarToken(accessToken: string) {
    this._token = accessToken;
    localStorage.setItem('token_fundacion', this._token);
  }

  guardarRefreshToken(refreshToken: any) {
    this._tokenRefresh = refreshToken;
    localStorage.setItem('tokenRefresh_fundacion', this._tokenRefresh);
  }

  public obtenerDatosToken(accessToken: string) {
    if (accessToken != null && accessToken != '') {
      return JSON.parse(AuthService.b64DecodeUnicode(accessToken.split('.')[1]));
    }
    return null;
  }

  login(usuarioo: Usuarioo): Observable<any> {
    const url = Constants.HOST + '/oauth/token';
    const credentials = btoa(Constants.APPNAME + ':' + Constants.APPPASSWORD);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credentials
    });
    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('password', usuarioo.contrasena);
    params.set('username', usuarioo.correo);
    return this.http.post<any>(url, params.toString(), {headers: httpHeaders});
  }

  logout() {
    this.spinner.show().then(() => {
      this._token = '';
      this._usuarioo = new Usuarioo();
      this._tokenRefresh = '';
      localStorage.clear();
      this.router.navigate(['/']).then(()=>{this.spinner.hide().then(() => {})});
    });
  }

  private static b64DecodeUnicode(str: string) {
    return decodeURIComponent(atob(str).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }

  isAuthenticated() {
    const payload = this.obtenerDatosToken(this.token);
    return !!(payload != null && payload.user_name && payload.user_name.length > 0);
  }


}
