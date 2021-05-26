import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {DocumentService} from '../../shared/services/document.service';
import {UserService} from '../../shared/services/user.service';
import {ClientService} from '../../shared/services/client.service';
import {FileService} from '../../shared/services/file.service';
import {ToasterService} from '../../shared/services/toaster.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    DocumentService,
    UserService,
    ClientService,
    FileService,
    ToasterService
  ]
})
export class DefaultModule { }
