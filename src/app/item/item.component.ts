import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  name = '';

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpService) { }

  ngOnInit() {
  }

  /**
   * Creating new Item
   */
  itemAdd() {
    this._http.addItem(this.name);
    this.name = '';
  }

}
