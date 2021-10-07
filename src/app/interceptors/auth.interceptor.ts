import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN_KEY, AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly service: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const rawToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const isAuthRequest = request.url.includes('api/');
    const isTokenAbsent = !rawToken;

    if(isAuthRequest || isTokenAbsent) {
      return next.handle(request);
    }

     const copy = request.clone({
       headers: new HttpHeaders({
         Authorization: `Bearer ${rawToken}`,
       }),
     });

    return next.handle(request);
  }
}
