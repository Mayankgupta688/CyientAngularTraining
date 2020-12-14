import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  profileForm = new FormGroup({
    firstName: new FormControl("Mayank", Validators.required),
    lastName: new FormControl("Gupta", [Validators.maxLength(5), Validators.required]),
    userAge: new FormControl("0", Validators.min(10))
  })
  constructor() { }

  updateNameValue() {
    this.profileForm.controls.firstName.setValue("Ankit...")
  }

  submitDataFromForm() {
    console.dir(this.profileForm.value)
  }


}
