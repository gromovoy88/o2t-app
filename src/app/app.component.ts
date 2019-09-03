import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'o2t-app';
  // tslint:disable-next-line:variable-name
  constructor(private _auth: AuthService) {}
}
