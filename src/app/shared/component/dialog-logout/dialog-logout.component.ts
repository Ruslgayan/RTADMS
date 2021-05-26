import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-dialog-logout',
  templateUrl: './dialog-logout.component.html',
  styleUrls: ['./dialog-logout.component.scss']
})
export class DialogLogoutComponent implements OnInit {

  userName = 'User';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ngxUiLoaderService: NgxUiLoaderService,
              private dialogRef: MatDialogRef<DialogLogoutComponent>) {
    if (data){
      this.userName = data.userName || this.userName;
    }
  }

  ngOnInit(): void {
  }

  confirm(): void{
    this.ngxUiLoaderService.start();
    this.dialogRef.close(true);
  }
}
