import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from '../../../shared/services/toaster.service';
import {AuthService} from '../../service/auth/auth.service';
import {Router} from '@angular/router';
import {SETTINGS} from '../../../shared/config/commons.settings';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private toasterService: ToasterService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              private ngxUiLoaderService: NgxUiLoaderService) { }

  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });

    this.authService.getLoggedInStatus().subscribe((status) => {
      if (status.isAuthenticated){
        // this.toasterService.showToaster('Correct credentials!', SETTINGS.TOASTER_MESSAGES.success);
        return this.router.navigate(['/home']);
      }
      this.toasterService.showToaster('Incorrect credentials!', SETTINGS.TOASTER_MESSAGES.error);
    });
  }

  onLogin(): void{
    // if (this.loginForm.invalid){
    //   this.toasterService.showToaster('Please Enter Your Username & Password!', SETTINGS.TOASTER_MESSAGES.error);
    // }
    const payload = this.loginForm.getRawValue();
    this.ngxUiLoaderService.start();
    this.authService.login(payload.username, payload.password);
  }
}
