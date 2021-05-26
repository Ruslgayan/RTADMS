import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarDismiss} from '@angular/material/snack-bar';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public snackBar: MatSnackBar) { }

  showToaster(message: string, type: string, customConfigs?: {duration?: number, panelClass?: string}): Observable<MatSnackBarDismiss>{
    let customClass = '';

    if (type.toUpperCase() === 'SUCCESS'){
      customClass = 'snack-bar-success';
    }

    if (type.toUpperCase() === 'ERROR'){
      customClass = 'snack-bar-error';
    }

    if (type.toUpperCase() === 'WARNING'){
      customClass = 'snack-bar-warning';
    }

    const config: any = Object.assign({}, {
      duration: 3000,
      panelClass: customClass,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    }, customConfigs);

    return this.snackBar.open(message, 'close', config).afterDismissed();
  }
}
