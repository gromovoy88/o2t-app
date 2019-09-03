import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth: AuthService, private router: Router) { }

  /**
   * Router Guard Method, which return boolean of login state
   */
  canActivate(): boolean {
    if (!this.auth.logIn()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
