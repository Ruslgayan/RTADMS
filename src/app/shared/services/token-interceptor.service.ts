import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from '../../authentication/service/auth/auth.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {ToasterService} from './toaster.service';
import {SETTINGS} from '../config/commons.settings';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService,
              private toasterService: ToasterService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    });

    return next.handle(req)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          // handle error here

          if (error.status === 401){
            this.toasterService.showToaster('Session Expired! Please login again.', SETTINGS.TOASTER_MESSAGES.error);
            this.authService.logOut();
          }

          return throwError(error.status);
        })
      );
  }


}
