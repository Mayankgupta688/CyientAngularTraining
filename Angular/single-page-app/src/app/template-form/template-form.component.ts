import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  userName: string = "Random";
  userId: number = 0;
  userAvatar: string = "None";
  formNameInvalid: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitData() {
    if(this.userName == "") {
      this.formNameInvalid = true;
    } else {
      // Post Calls....
    }
  }

}
