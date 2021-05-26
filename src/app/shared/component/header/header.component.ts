import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogLogoutComponent} from '../dialog-logout/dialog-logout.component';
import {AuthService} from '../../../authentication/service/auth/auth.service';
import {SETTINGS} from '../../config/commons.settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() deviceXs: boolean;
  private privileges: string;
  showUser = false;
  showDocument = false;
  showClient = false;
  userName: string;

  constructor(public dialog: MatDialog, private authService: AuthService) {

  }

  ngOnInit(): void {

    this.privileges = localStorage.getItem(SETTINGS.PRIVILEGES);

      // @ts-ignore
    this.showClient = this.privileges.includes('CLIENT.GET' || 'CLIENT.PUT' || 'CLIENT.POST');
      // @ts-ignore
    this.showDocument = this.privileges.includes('DOCUMENT.GET' || 'DOCUMENT.POST' || 'DOCUMENT.PUT');
      // @ts-ignore
    this.showUser = this.privileges.includes('USER.GET' || 'USER.PUT' || 'USER.POST');

    this.userName = this.authService.getUserObject().username;
  }

  // tslint:disable-next-line:typedef
  logOut(){

    const dialogRef = this.dialog.open(DialogLogoutComponent,
      {
        data: {
            userName: this.authService.getUserObject().username
        }
      });

    dialogRef.afterClosed().subscribe( result => {
      if (result){
        this.authService.logOut();
      }
    });
  }
}
