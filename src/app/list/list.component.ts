import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  items: Object;
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getItems().subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }

}
