import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../modules/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  newUser(userData){
    return this.http.post<User>('/api/new-user', userData);
  }

  // tslint:disable-next-line:typedef
  getUser(username){
    return this.http.get<User>('/api/get-user-by-username/' + username);
  }

  // tslint:disable-next-line:typedef
  updateUser(nic, userData){
    // @ts-ignore
    return this.http.put<User>(`/api/update-user/${nic}`, userData);
  }

  // tslint:disable-next-line:typedef
  changePassword(username, oldPassword, userData){
    // tslint:disable-next-line:ban-types
    return this.http.post<String>('/api/update-password/' + username + '/' + oldPassword, userData);
  }
}
