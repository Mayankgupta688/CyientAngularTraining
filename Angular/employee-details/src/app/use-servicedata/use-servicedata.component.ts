import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-use-servicedata',
  templateUrl: './use-servicedata.component.html',
  styleUrls: ['./use-servicedata.component.css']
})
export class UseServicedataComponent {

  constructor(public _dataService: DataService) { }

}
