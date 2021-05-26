import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../../modules/client/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  newClient(clientData){
    // return this.http.post<any>(this.url, clientData);
    return this.http.post<Client>('/api/new-client', clientData);
  }

  // tslint:disable-next-line:typedef
  getClient(companyName){
    return this.http.get<Client>('/api/get-client-by-tin/' + companyName);
  }

  // tslint:disable-next-line:typedef
  updateClient(tin, clientData){
    // @ts-ignore
    return this.http.put<Client>(`/api/update-client-by-tin/${tin}`, clientData);
  }

  // tslint:disable-next-line:typedef
  getCompanies(){
    return this.http.get('/api/get-companies');
  }

  // tslint:disable-next-line:typedef
  getAllcompanies(){
    return this.http.get('/api/get-all-client');
  }
}
