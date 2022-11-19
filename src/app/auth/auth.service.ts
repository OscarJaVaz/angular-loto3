import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Usuarioo } from '../models/usuarioo';
import {NgxSpinnerService} from "ngx-spinner";
import {Router} from "@angular/router";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario: Usuarioo = new Usuarioo();
  private _token: string = '';
  private _tokenRefresh: string = '';

  constructor(private http: HttpClient,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  get usuario(): Usuarioo {
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
    this._usuario = value;
  }

  guardarUsuario(accessToken: string) {
    const payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuarioo();
    this._usuario.nombre = payload.nombre;
    this._usuario.apellido = payload.apellido;
    this._usuario.fecha_creaci = payload._fecha_creaci;
    this._usuario.correo = payload.correo;
    this._usuario.status = payload.status;
    this._usuario.telefono = payload.telefono;
    this._usuario.fecha_actual = payload.fecha_actual;
    this._usuario.genero = payload.genero;

    localStorage.setItem('user_fundacion', JSON.stringify(this._usuario));
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

  login(usuario: Usuarioo): Observable<any> {
    const url = Constants.HOST + '/oauth/token';
    const credentials = btoa(Constants.APPNAME + ':' + Constants.APPPASSWORD);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credentials
    });
    const params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('password', usuario.contrasena);
    params.set('username', usuario.correo);
    return this.http.post<any>(url, params.toString(), {headers: httpHeaders});
  }

  logout() {
    this.spinner.show().then(() => {
      this._token = '';
      this._usuario = new Usuarioo();
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
