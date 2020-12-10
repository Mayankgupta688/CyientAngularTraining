import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-use-service',
  templateUrl: './use-service.component.html',
  styleUrls: ['./use-service.component.css']
})
export class UseServiceComponent {
  applicationLocalUser: string = "";
  constructor(public _dataService: DataService) { 
    this.applicationLocalUser = this._dataService.userName;
  }

  updateServiceData() {
    this._dataService.userName = "Random Name";
  }

}
