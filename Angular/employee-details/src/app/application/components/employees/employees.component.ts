import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
  employeeList: any[] = []
  filterList: any[] = [];
  currentTime: string = "";

  constructor(private _dataService: DataService) { 
    this._dataService.getEmployeeList()
    this.filterList = this.employeeList;

    this._dataService.getEmployeeList().subscribe(data => {
      this.employeeList = data;
      this.filterList = data;
    })

    this._dataService.notifyDeleteEvent.subscribe(() => {
      this.employeeList = []
      this.filterList = [];
    })

    this._dataService.notifyParentToFilter.subscribe((filtext) => {
      this.filterList = this.employeeList.filter((employee) => {
        return employee.name.indexOf(filtext) > -1;
      })
    })

    this._dataService.someObservable.subscribe((data) => {
      this.currentTime = data;
    })

  }
}
