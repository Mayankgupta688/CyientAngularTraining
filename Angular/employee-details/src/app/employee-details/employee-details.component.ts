import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  @Input() employeedata: any;
  @Input() userName: string;
  @Output() notifyParentToDelete: EventEmitter<string> = new EventEmitter<string>()
  salary: number = 100;
  constructor() { }

  deleteEmployee(empId: string) {
    debugger;
    this.notifyParentToDelete.emit(empId)
  }
}
