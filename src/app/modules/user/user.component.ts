import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {SETTINGS} from '../../shared/config/commons.settings';
import {User} from './user';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   userRegistrationForm: FormGroup;
   userFindForm: FormGroup;

  private privileges: string;
  getUser = false;
  updateUser = false;
  addUser = false;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private toasterService: ToasterService) { }


  ngOnInit(): void {
    this.privileges = localStorage.getItem(SETTINGS.PRIVILEGES);

    this.getUser = this.privileges.includes('USER.GET');
    this.updateUser = this.privileges.includes('USER.PUT');
    this.addUser = this.privileges.includes('USER.POST');

    this.userRegistrationForm = this.fb.group({
      // nic: ['', Validators.compose([Validators.required]), Validators.minLength(10)],
      nic: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      email: [''],
      roles: [''],
      password: ['', Validators.compose([Validators.required])],
      status: ['']
    });

    this.userFindForm = this.fb.group({
      nic: ['', Validators.compose([Validators.required])],
      username: ['', Validators.compose([Validators.required])],
      email: [''],
      roles: [Object],
      status: ['']
    });
  }

  // tslint:disable-next-line:typedef
  loadApiData(): void{
    this.ngxUiLoaderService.start();
    this.userService.getUser(this.userFindForm.getRawValue().username)
      .subscribe(
        (user: User) => {
          this.ngxUiLoaderService.stop();
          this.editUser(user);
          this.toasterService.showToaster(`Success!`, SETTINGS.TOASTER_MESSAGES.success);
          // console.log(user.roles[0].roleName);
        },
        error => {
          console.log('ERROR', error);
          this.ngxUiLoaderService.stop();
          this.toasterService.showToaster(`Failed!`, SETTINGS.TOASTER_MESSAGES.error);
        }
      );
  }
  editUser(user: User): void{
    // @ts-ignore
    // @ts-ignore
    this.userFindForm.patchValue({
      nic: user.nic,
      username: user.username,
      email: user.email,
      roles: user.roles[0].roleName,
      status: user.status
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    // this.newDocumentForm.patchValue({documentName: this.uploadedFileName});
    this.ngxUiLoaderService.start();
    this.userRegistrationForm
      .patchValue({roles: [{roleName: this.userRegistrationForm.getRawValue().roles}]});

    this.userService.newUser(this.userRegistrationForm.value)
        .subscribe(
          response => {
            console.log('SUCCESS', response);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`User successfully added!`, SETTINGS.TOASTER_MESSAGES.success);
            this.userRegistrationForm.reset();
          },
          error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`User added failed!`, SETTINGS.TOASTER_MESSAGES.error);
          }
        );
  }

  // tslint:disable-next-line:typedef
  onUpdate(){
    this.ngxUiLoaderService.start();
    this.userFindForm
      .patchValue({roles: [{roleName: this.userFindForm.getRawValue().roles}]});

    this.userService.updateUser(this.userFindForm.getRawValue().username, this.userFindForm.value)
        .subscribe(
          response => {
            console.log('SUCCESS', response);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster('User Successfully Updated!', SETTINGS.TOASTER_MESSAGES.success);
            this.userFindForm.reset();
          },
          error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster(`User update failed!`, SETTINGS.TOASTER_MESSAGES.error);
          }
        );
  }
}
