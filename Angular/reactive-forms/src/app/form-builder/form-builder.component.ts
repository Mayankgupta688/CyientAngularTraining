import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  constructor(private _fb: FormBuilder) { }

  profileForm = this._fb.group({
    firstName: ['Hello'],
    lastName: ["World"],
    userAge: [0],
    address: this._fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required]
    })
  })

  randomFunction() {
    debugger;
  }

}
