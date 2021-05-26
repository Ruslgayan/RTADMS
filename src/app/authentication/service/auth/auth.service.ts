import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SETTINGS} from '../../../shared/config/commons.settings';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatus = new Subject();

  constructor(private http: HttpClient,
              private router: Router,
              private ngxUiLoaderService: NgxUiLoaderService) { }

  login(username: string, password: string): void{
    this.http.post( `/api/login`, {username, password})
      .subscribe((response: any) => {
        this.setSession(response);
        this.ngxUiLoaderService.stop();
        this.loginStatus.next({isAuthenticated: true});
      }, error => {
        if (error === 401 || error.status === 401){
          return this.loginStatus.next({isAuthenticated: false});
        }
      });
  }

  setSession(payload): void{
    this.ngxUiLoaderService.start();
    const {jwtToken, userDTO} = payload;
    const {permissions} = userDTO;
    localStorage.setItem(SETTINGS.ACCESS_TOKEN, jwtToken);
    localStorage.setItem(SETTINGS.USER, JSON.stringify(userDTO));
    localStorage.setItem(SETTINGS.PRIVILEGES, JSON.stringify(permissions.map(permission => permission.permissionName)));
  }

  getLoggedInStatus(): Observable<any>{
    return this.loginStatus.asObservable();
  }

  isLoggedIn(): boolean{
    return localStorage.getItem(SETTINGS.ACCESS_TOKEN) !== null;
  }

  getUserObject(): any{
    const userStr = localStorage.getItem(SETTINGS.USER);
    return JSON.parse(userStr);
  }

  logOut(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.ngxUiLoaderService.stop();
  }

  getToken(): any {
    return localStorage.getItem(SETTINGS.ACCESS_TOKEN) || '';
  }
}
