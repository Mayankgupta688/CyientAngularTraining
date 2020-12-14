import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../application/services/data.service';
import appUrl from "../env";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{
  userName: string = "";
  userId: string = "";
  userAvatar: string = "";
  constructor(private _http: HttpClient, private _dataService: DataService) { 

  }

  addEmployee() {
    this._dataService.addEmployee(this.userId, this.userName, this.userAvatar)
  }

}
