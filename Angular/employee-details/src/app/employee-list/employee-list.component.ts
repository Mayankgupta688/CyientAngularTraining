import { Component, OnInit } from '@angular/core';
import * as data from "../data/employees.json";
import IEmployee from '../interfaces/IEmployee';

console.dir(data)

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeeList: any[] = [];
  filterList: any[] = [];
  userName: string = "Mayank";
  showFilter: boolean = false;

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  refreshData() {
    this.filterList = this.employeeList;
  }

  constructor() { 
    this.employeeList = data['default'].employeeList;
    this.filterList = this.employeeList;
  }

  deleteEmployeeOnParent(emplId) {
    this.employeeList = this.employeeList.filter((employee) => {
      return employee.id != emplId;
    })
  }

  filterEmployeeList(filterValue) {
    this.filterList = this.employeeList.filter((employee) => {
      return employee.name.indexOf(filterValue) > -1;
    })
  }

}
