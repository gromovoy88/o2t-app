import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = 'http://frontend-recruitment.one2tribe.pl:8080/api/v1/item';
  authToken = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIi' +
    'wiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6IkNCZ2NEU1dhIiwiZXhwIjoxNTY4MjI0NTcxLCJyb2wiOlsiVXNl' +
    'ciJdfQ.R47A1d09RfvonnDsBMWbjJvcaN67YvZThLP457NgXWbFP2VplRQxKE5EyOkOkDFxHF6K5eZXy3fMbp3cX7yRdw';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.authToken);
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(this.apiUrl, { headers: this.headers });
  }

  addItem(value) {
    return this.http.post(this.apiUrl, { name: value }, { headers: this.headers });
  }
}
