import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent{

  header = "This is Theme Header"
  themeClass: string = "red";
  constructor() { }

  updateClass(inputColor) {
    this.themeClass = inputColor;
  }

  updateHeader() {
    this.header = "Welcome Mayank...."
  }

}
