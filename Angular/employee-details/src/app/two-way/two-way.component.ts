import { Component, OnInit } from '@angular/core';
import { IStudent } from "../interfaces/IStudent";

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {

  sampleStudent: IStudent = {
    name: "",
    age: 0
  }

  userName = "Mayank";
  userAge = 0;

  constructor() { }

  updateName(event) {
    debugger;
    this.userName = event.target.value;
  }

  getAge() {
    alert(this.userAge);
  }

  submitForm() {
    debugger;
  }

}
