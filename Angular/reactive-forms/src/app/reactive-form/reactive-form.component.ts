import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl("Mayank", Validators.required),
    lastName: new FormControl("Gupta", [Validators.maxLength(5), Validators.required]),
    userAge: new FormControl("0", Validators.min(10))
  })
  constructor() { }

  ngOnInit() {
    this.profileForm.valueChanges.subscribe(val => {
      alert("Form Value Changed...")
    });

    this.profileForm.get('firstName').valueChanges.subscribe(val => {
      alert("firstName value updated....")
    });
  }

  updateNameValue() {
    this.profileForm.controls.firstName.setValue("Ankit...");
    this.profileForm.setValue({
      firstName: "Ankit",
      lastName: "Sharma",
      userAge: 34
    })
  }

  submitDataFromForm() {
    console.dir(this.profileForm.value)
  }
}
