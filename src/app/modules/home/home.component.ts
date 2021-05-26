import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {FileService} from '../../shared/services/file.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {DocumentService} from '../../shared/services/document.service';
import {Document} from '../document/document';
import {ClientService} from '../../shared/services/client.service';
import {AuthService} from '../../authentication/service/auth/auth.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {SETTINGS} from '../../shared/config/commons.settings';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  files: File[] = [];
  documents: Document[];
  companies: Array<string>;
  years: Array<string>;
  reports: Array<string>;
  old: string;

  constructor(private fb: FormBuilder,
              private fileService: FileService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private documentService: DocumentService,
              private clientService: ClientService,
              private toasterService: ToasterService,
              private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

  // @ts-ignore
  findDocForm = this.fb.group({
    tin: [''],
    companyName: [''],
    financialYear: [''],
    reportType: ['']
  });

  // @ts-ignore
  changePasswordForm = this.fb.group({
    oldPassword: [''],
    newPassword: [''],
    password: ['']
  });

  ngOnInit(): void {
    this.fileService.onDownloadLinkChange.
    subscribe( resp => {
      const blob = new Blob([resp.data]);
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      document.body.appendChild(a);
      a.setAttribute('style', 'display: none');
      a.href = url;
      a.download = resp.fileName;
      a.click();
      this.ngxUiLoaderService.stop();
      window.URL.revokeObjectURL(url);
      a.remove();
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
  // tslint:disable-next-line:typedef
  getFile() {
    // @ts-ignore
    this.ngxUiLoaderService.start();

    this.documentService.getDocument(this.findDocForm.getRawValue().financialYear,
      this.findDocForm.getRawValue().reportType,
      this.findDocForm.getRawValue().companyName)
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
    // this.findDocForm.reset();
  }

  downloadFileTest(fileName): void{
    this.ngxUiLoaderService.start();
    this.fileService.downloadFile(fileName);
  }

  // tslint:disable-next-line:typedef
  clearTable(){
    this.documents = [];
  }

  // tslint:disable-next-line:typedef
  changePassword() {
    this.ngxUiLoaderService.start();
    const username = this.authService.getUserObject().username;

    if (this.changePasswordForm.getRawValue().newPassword === this.changePasswordForm.getRawValue().password){

      // this.userService.changePassword(username, this.changePasswordForm.getRawValue().
      //   oldPassword, this.changePasswordForm.value).subscribe(
      //     re => this.correctPassword(),
      //   error => this.ngxUiLoaderService.stop()
      // );

      this.userService.changePassword(username, this.changePasswordForm.getRawValue().
        oldPassword, this.changePasswordForm.value).subscribe(
        response => {
          this.toasterService.showToaster('Password update successfully!', SETTINGS.TOASTER_MESSAGES.success);
          localStorage.clear();
          this.router.navigate(['/login']);
          this.ngxUiLoaderService.stop();
        },
        (error) => {
          console.log(error);
          this.ngxUiLoaderService.stop();
          this.toasterService.showToaster('Cannot update password!', SETTINGS.TOASTER_MESSAGES.error);
          this.changePasswordForm.reset();
        }
      );

    }
    else {
      this.ngxUiLoaderService.stop();
      this.toasterService.showToaster('New password and confirm new password does not match!', SETTINGS.TOASTER_MESSAGES.error);
      this.changePasswordForm.reset();
    }
  }

  // tslint:disable-next-line:typedef
  correctPassword(){
    this.toasterService.showToaster('Password update successfully!', SETTINGS.TOASTER_MESSAGES.success);
    localStorage.clear();
    this.router.navigate(['/login']);
    this.ngxUiLoaderService.stop();
  }
}
