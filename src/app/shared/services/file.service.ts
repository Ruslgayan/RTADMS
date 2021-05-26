import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  uploadedFileResponse: string;
  onUploadedFileResponseChange: Subject<any> = new Subject();

  onDownloadLinkChange: Subject<any> = new Subject();

  constructor(private http: HttpClient) { }

  downloadFile(fileName): void{
    this.http.get(`/api/download-file?fileName=${fileName}`, {responseType: 'blob'}).subscribe((response: any) => {
      this.onDownloadLinkChange.next({fileName, data: response});
    });
  }

  uploadFile(file): void{
    this.http.post(`/api/new-file`, file, {responseType: 'json'}).subscribe((response: any) => {
      this.uploadedFileResponse = response;
      this.onUploadedFileResponseChange.next(this.uploadedFileResponse);
    });
  }

  // tslint:disable-next-line:typedef
  deleteFile(fileName){
    // @ts-ignore
    return this.http.delete(`/api/delete-file?fileName=` + fileName);
  }
}
