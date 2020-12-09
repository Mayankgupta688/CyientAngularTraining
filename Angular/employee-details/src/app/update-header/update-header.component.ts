import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-header',
  templateUrl: './update-header.component.html',
  styleUrls: ['./update-header.component.css']
})
export class UpdateHeaderComponent {
  name: string = "Guest";
  color: string = "red";
  padding: string = "10";
  constructor() { }

  updateHeader(element) {
    this.name = element.value;
  }

  updateColor(element) {
    this.color = element.value;
    element.value = "";
  }

  updatePadding(element) {
    this.padding = element.value;
  }

  updatePaddingWithEvents(event) {
    this.padding = event.target.value;
  }
}
