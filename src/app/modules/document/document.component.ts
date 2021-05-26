import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileService} from '../../shared/services/file.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {FormBuilder} from '@angular/forms';
import {DocumentService} from '../../shared/services/document.service';
import {SETTINGS} from '../../shared/config/commons.settings';
import {ToasterService} from '../../shared/services/toaster.service';
import {Document} from './document';
import {ClientService} from '../../shared/services/client.service';
import {MatDialog} from '@angular/material/dialog';
import {AuthService} from '../../authentication/service/auth/auth.service';
import {DialogDeletefileComponent} from './dialog-deletefile/dialog-deletefile.component';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

  files: File[] = [];
  uploadedFileName = ' ';
  documents: Document[];
  companies: Array<string>;
  years: Array<string>;
  reports: Array<string>;

  private privileges: string;
  getDocument = false;
  updateDocument = false;
  addDocument = false;
  deleteFile = false;

  // @ts-ignore
  newDocumentForm = this.fb.group({
    companyName: [''],
    financialYear: [''],
    reportType: [''],
    documentName: [''],
    status: ['']
  });

  // @ts-ignore
  updateDocumentForm = this.fb.group({
    companyName: [''],
    financialYear: [''],
    reportType: [''],
    status: ['']
  });


  constructor(private fileService: FileService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private fb: FormBuilder,
              private documentService: DocumentService,
              private toasterService: ToasterService,
              public dialog: MatDialog,
              private authService: AuthService,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.privileges = localStorage.getItem(SETTINGS.PRIVILEGES);

    this.getDocument = this.privileges.includes('DOCUMENT.GET');
    this.updateDocument = this.privileges.includes('DOCUMENT.PUT');
    this.addDocument = this.privileges.includes('DOCUMENT.POST');
    this.deleteFile = this.privileges.includes('DOCUMENT.DELETE');

    this.fileService.onUploadedFileResponseChange.subscribe((resp) => {
      this.ngxUiLoaderService.stop();
      this.uploadedFileName = resp.fileName;
    });

    this.companyList();
    this.yearList();
    this.reportList();
  }

  // tslint:disable-next-line:typedef
  public yearList(){
    this.documentService.getFinancialYearList().subscribe(
      (listYears: Array<string>) => this.years = listYears,
      error => console.log('Cannot get year list')
    );
  }
  // tslint:disable-next-line:typedef
  companyList(){
    this.clientService.getCompanies().subscribe(
      // tslint:disable-next-line:ban-types
      (listCompanies: Array<string>) => this.companies = listCompanies,
      error => console.log('Cannot get company list')
    );
  }
  // tslint:disable-next-line:typedef
  reportList(){
    this.documentService.getReportList().subscribe(
      (listReports: Array<string>) => this.reports = listReports,
      error => console.log('Cannot get report types')
    );
  }
  //
  onSelect(event): void {
    const fileObject = event.addedFiles[0];
    const formData = new FormData();
    formData.append('file', fileObject);
    this.ngxUiLoaderService.start();
    this.fileService.uploadFile(formData);
    this.files = [];
    this.files.push(...event.addedFiles);
  }

  onRemove(event): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  // tslint:disable-next-line:typedef
  saveDocument(){
    // Get uploaded file name and assign to form field
    this.ngxUiLoaderService.start();
    this.newDocumentForm.patchValue({documentName: this.uploadedFileName});

    if (this.uploadedFileName === ' ' || this.uploadedFileName === null){
      this.toasterService.showToaster(`Please upload document!`, SETTINGS.TOASTER_MESSAGES.error);
    }

    else {
      this.documentService.newDocument(this.newDocumentForm.value, this.newDocumentForm.getRawValue().companyName)
        .subscribe(
          response => {
            console.log('SUCCESS', response);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`Document successfully uploaded!`, SETTINGS.TOASTER_MESSAGES.success);
            this.newDocumentForm.reset();
            this.onRemove(this.uploadedFileName);
          },
          error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`Document upload failed!`, SETTINGS.TOASTER_MESSAGES.error);
          }
        );
    }
  }

  // tslint:disable-next-line:typedef
  getFile() {
    // @ts-ignore
    this.ngxUiLoaderService.start();
    this.documentService.getDocument(this.updateDocumentForm.getRawValue().financialYear,
      this.updateDocumentForm.getRawValue().reportType,
      this.updateDocumentForm.getRawValue().companyName)
      .subscribe(
        (listDocuments) => {
          this.documents = listDocuments;
          this.ngxUiLoaderService.stop();
        },
        (error) => {
          console.log(error);
          this.ngxUiLoaderService.stop();
        }
      );
  }

  // tslint:disable-next-line:typedef
  deleteDocument(documentName): void{

    const dialogRef = this.dialog.open(DialogDeletefileComponent,
      {
        data: {
          userName: this.authService.getUserObject().username
        }
      });

    dialogRef.afterClosed().subscribe( result => {
      if (result){
        this.fileService.deleteFile(documentName)
          .subscribe(
            response => {
              console.log('SUCCESS', response);
            },
            error => {
              console.log('ERROR', error);
            }
          );

        this.documentService.deleteDocument(documentName)
          .subscribe(
            response => {
              console.log('SUCCESS', response);
              this.ngxUiLoaderService.stop();
              this.updateDocumentForm.reset();
              this.documents = [];
              this.toasterService.showToaster(`Document successfully deleted!`, SETTINGS.TOASTER_MESSAGES.success);
            },
            error => {
              console.log('ERROR', error);
              this.ngxUiLoaderService.stop();
              this.toasterService.showToaster(`Document delete failed!`, SETTINGS.TOASTER_MESSAGES.error);
            }
          );

      }
    });

  }
}
