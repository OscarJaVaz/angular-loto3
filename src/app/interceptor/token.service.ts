import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Token implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.token;
    if (token != null) {
      if (req.url.indexOf('oauth/token') < 1) {
        const autReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer' + token)
        });
        return next.handle(autReq);
      }
    }
    return next.handle(req);
  }

}