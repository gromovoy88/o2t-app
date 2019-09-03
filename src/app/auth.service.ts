import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = 'http://frontend-recruitment.one2tribe.pl:8080/api';
  token;
  constructor(private http: HttpClient, private router: Router) {
  }

  /**
   * Method for getting JWT Token from server, and save to local storage
   * @param userName - User name
   * @param password - Password
   */
  login(userName: string, password: string) {
    this.http.post(this.api + '/authenticate', { username : userName, password }, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json'),
      observe: 'response'
    })
      .subscribe((resp) => {
        this.token = resp.headers.get('Authorization');
        localStorage.setItem('token', this.token);
        this.router.navigate(['list']);
      }, (error) => {
        alert('Wrong credentials');
        console.log(error);
      });
  }

  /**
   * Delete JWT token from local storage
   */
  logout() {
    localStorage.removeItem('token');
  }

  /**
   * Getting boolean value of token state
   */
  logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }

  /**
   * Getter for JWT token
   */
  getToken(): string {
    return localStorage.getItem('token');
  }
}
