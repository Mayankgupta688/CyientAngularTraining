import { Component, OnInit } from '@angular/core';
import IEmployee from "../interfaces/IEmployee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: ["input {margin: 5px}", "h5 {color: red}"],
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  filterData: string ="";
  filterList: IEmployee[];
  employeeList: IEmployee[];

  constructor() {

    this.employeeList = [{
      id: 1,
      name: "Mayank",
      createdAt: new Date().toUTCString(),
      avatar: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51734/honda-hornet-action0.jpeg?wm=2&q=75",
      showImage: true,
      disableButton: true
  
    }, {
      id: 2,
      name: "Anshul",
      createdAt: new Date().toUTCString(),
      avatar: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51734/honda-hornet-action0.jpeg?wm=2&q=75",
      showImage: false,
      disableButton: false
    }, {
      id: 3,
      name: "Ankit",
      createdAt: new Date().toUTCString(),
      avatar: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51734/honda-hornet-action0.jpeg?wm=2&q=75",
      showImage: true,
      disableButton: true
    }, {
      id: 4,
      name: "Aniket",
      createdAt: new Date().toUTCString(),
      avatar: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/51734/honda-hornet-action0.jpeg?wm=2&q=75",
      showImage: true,
      disableButton: false
    }];

    this.filterList = this.employeeList;
  }

  filterEmployeeData(value) {
    this.filterData = value;
    this.filterList = this.employeeList.filter((employee) => {
      return employee.name.indexOf(value) > -1;
    })
  }

  // We will send entire Object
  deleteEmployee(emp) {
    this.employeeList = this.employeeList.filter((employee) => {
      return employee.id != emp.id;
    })
  }

  // We can send id in the function call...
  deleteEmployeeById(employeeId) {
    this.employeeList = this.employeeList.filter((employee) => {
      return employee.id != employeeId;
    })
  }

  // We will send $event
  deleteEmployeeByEvent(event) {
    this.employeeList = this.employeeList.filter((employee) => {
      return employee.id != event.target.id;
    })
  }

  hoverFunction() {
    alert("Employee Focussed...")
  }
}
