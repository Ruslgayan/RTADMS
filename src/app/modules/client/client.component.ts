import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ClientService} from '../../shared/services/client.service';
import {ToasterService} from '../../shared/services/toaster.service';
import {SETTINGS} from '../../shared/config/commons.settings';
import {Client} from './client';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  companies: Array<string>;
  private privileges: string;
  getClient = false;
  updateClient = false;
  addClient = false;

  constructor(private fb: FormBuilder,
              private clientService: ClientService,
              private ngxUiLoaderService: NgxUiLoaderService,
              private toasterService: ToasterService) { }

  // @ts-ignore
  newClientForm = this.fb.group({
    tin: [''],
    companyName: [''],
    email: [''],
    phone: [''],
    address: [''],
    status: ['']
  });
  // @ts-ignore
  /*newClientForm = new FormGroup({
    tin: new FormControl(''),
    companyName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    status: new FormControl('')
  });*/
  // @ts-ignore
  findClientForm = this.fb.group({
    tin: [''],
    companyName: [''],
    email: [''],
    phone: [''],
    address: [''],
    status: ['']
  });

  /*
  findClientForm = new FormGroup({
    tin: new FormControl(''),
    companyName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    status: new FormControl('')
  });*/

  ngOnInit(): void {
    this.privileges = localStorage.getItem(SETTINGS.PRIVILEGES);

    this.getClient = this.privileges.includes('CLIENT.GET');
    this.updateClient = this.privileges.includes('CLIENT.PUT');
    this.addClient = this.privileges.includes('CLIENT.POST');

    this.clientService.getAllcompanies().subscribe(
      // tslint:disable-next-line:ban-types
      (listCompanies: Array<string>) => this.companies = listCompanies,
      error => console.log('Cannot get company list')
    );
  }

  // tslint:disable-next-line:typedef
  loadApiData(): void{
    // @ts-ignore
    this.ngxUiLoaderService.start();
    this.clientService.getClient(this.findClientForm.getRawValue().companyName).subscribe(
      (client: Client) => {
        this.editClient(client);
        this.ngxUiLoaderService.stop();
      },
      error => {
        console.log('ERROR', error);
        this.ngxUiLoaderService.stop();
      }
    );
  }

  editClient(client: Client): void{
    this.findClientForm.patchValue({
      tin: client.tin,
      companyName: client.companyName,
      email: client.email,
      phone: client.phone,
      address: client.address,
      status: client.status
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.ngxUiLoaderService.start();
    this.clientService.newClient(this.newClientForm.value)
        .subscribe(
          response => {console.log('SUCCESS', response);
                       this.ngxUiLoaderService.stop();
                       this.toasterService.showToaster('Client Successfully Added!', SETTINGS.TOASTER_MESSAGES.success);
                       this.newClientForm.reset(); },
          error => {
            console.log('ERROR', error);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster('Add new client failed!', SETTINGS.TOASTER_MESSAGES.error);
          }
        );
  }

  // tslint:disable-next-line:typedef
  onUpdate(){
    this.ngxUiLoaderService.start();
    try {
      this.clientService.updateClient(this.findClientForm.getRawValue().tin, this.findClientForm.value)
        .subscribe(
          response => {
            console.log('SUCCESS', response);
            this.ngxUiLoaderService.stop();
            this.toasterService.showToaster('Client Successfully Updated!', SETTINGS.TOASTER_MESSAGES.success);
            this.findClientForm.reset();
          },
          error => {
            console.log('ERROR', error);
          }
        );

    }catch (e){
      this.ngxUiLoaderService.stop();
      return this.toasterService.showToaster('Client update failed!', SETTINGS.TOASTER_MESSAGES.error);
    }
  }
}
