import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { UserComponent } from './modules/user/user.component';
import { DocumentComponent } from './modules/document/document.component';
import { ClientComponent } from './modules/client/client.component';
import {DefaultModule} from './layouts/default/default.module';
import { HeaderComponent } from './shared/component/header/header.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { DialogLogoutComponent } from './shared/component/dialog-logout/dialog-logout.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './authentication/service/auth/auth.service';
import {TokenInterceptorService} from './shared/services/token-interceptor.service';
import {NgxUiLoaderConfig, NgxUiLoaderModule} from 'ngx-ui-loader';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {DocumentService} from './shared/services/document.service';
import {CdkColumnDef} from '@angular/cdk/table';
import {UserService} from "./shared/services/user.service";
import {ClientService} from "./shared/services/client.service";
import {FileService} from "./shared/services/file.service";
import {ToasterService} from "./shared/services/toaster.service";
import { DialogDeletefileComponent } from './modules/document/dialog-deletefile/dialog-deletefile.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsOpacity: 0.5,
  bgsPosition: 'bottom-right',
  bgsSize: 60,
  bgsType: 'ball-spin-clockwise',
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: 'red',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'ball-spin-clockwise',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: true,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300
};

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HomeComponent,
    UserComponent,
    DocumentComponent,
    ClientComponent,
    HeaderComponent,
    FooterComponent,
    DialogLogoutComponent,
    DialogDeletefileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DefaultModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxDropzoneModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    DocumentService,
    UserService,
    ClientService,
    FileService,
    ToasterService,
    CdkColumnDef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
