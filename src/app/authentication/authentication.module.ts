import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './component/login/login.component';
import {MaterialModule} from '../shared/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthService} from './service/auth/auth.service';
import {TokenInterceptorService} from '../shared/services/token-interceptor.service';
import {CdkColumnDef} from '@angular/cdk/table';


@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    CdkColumnDef
  ],
})
export class AuthenticationModule { }
