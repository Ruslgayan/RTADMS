import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Document} from '../../modules/document/document';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  newDocument(documentData, companyName){
    return this.http.post<Document>('/api/new-document/' + companyName, documentData);
  }

  // tslint:disable-next-line:typedef
  getDocument(finYear, docType, tin){
    return this.http.get<Document []>('/api/get-filename/' + finYear + '/' + docType + '/' + tin);
  }

  // tslint:disable-next-line:typedef
  deleteDocument(documentName){
    // @ts-ignore
    return this.http.delete('/api/delete-document/' + documentName);
  }

  // tslint:disable-next-line:typedef
  getFinancialYearList(){
    return this.http.get('/api/get-years');
  }

  // tslint:disable-next-line:typedef
  getReportList(){
    return this.http.get('/api/get-reports');
  }
}
