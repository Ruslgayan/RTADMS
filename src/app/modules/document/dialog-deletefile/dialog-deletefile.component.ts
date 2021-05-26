import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-dialog-deletefile',
  templateUrl: './dialog-deletefile.component.html',
  styleUrls: ['./dialog-deletefile.component.scss']
})
export class DialogDeletefileComponent implements OnInit {
  userName: 'User';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private ngxUiLoaderService: NgxUiLoaderService,
              private dialogRef: MatDialogRef<DialogDeletefileComponent>) {
    if (data){
      this.userName = data.userName || this.userName;
    }
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  confirm() {
    this.ngxUiLoaderService.start();
    this.dialogRef.close(true);
  }
}
