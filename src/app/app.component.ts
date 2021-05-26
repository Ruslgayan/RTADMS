import { Component } from '@angular/core';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RTA-DMS';

  constructor() {
    console.log(environment.production); // Logs false for default environment
  }
  //
  // test(){
  //   this.router.navigate(['login']);
  // }
}
