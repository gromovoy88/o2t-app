import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api = 'http://frontend-recruitment.one2tribe.pl:8080/api';
  resource = '/v1/item';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  getItems() {
    return this.http.get(this.api + this.resource,
      { headers: this.headers.set('Authorization', localStorage.getItem('token')) });
  }

  addItem(value) {
    return this.http.post(this.api + this.resource,
      { name: value },
      { headers: this.headers.set('Authorization', localStorage.getItem('token')) })
      .subscribe(() => {
        this.router.navigate(['list']);
    });
  }
}
