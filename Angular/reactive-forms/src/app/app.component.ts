import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = new FormControl("");
  getData() {
    debugger;
    if(this.userName.status == "INVALID") {
      alert("enter the Value");
      return;
    }
    alert(this.userName.value)
  }
}
