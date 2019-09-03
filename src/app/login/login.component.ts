import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: '';
  password: '';

  // tslint:disable-next-line:variable-name
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  /**
   * User login method
   */
  login() {
    this._auth.login(this.userName, this.password);
  }
}
