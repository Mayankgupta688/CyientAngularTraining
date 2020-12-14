import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FormBuilderComponent]
})
export class AppModule { }
