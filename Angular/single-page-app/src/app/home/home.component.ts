import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../styles/common.style.css']
})
export class HomeComponent implements OnInit {
  empList: any[];
  constructor(private _http: HttpClient, private _router: Router) { }

  ngOnInit(): void {
    this._http.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata").subscribe((data: any) => {
      this.empList = data;
    })
  }

  redirectToUser(empId, empName) {
    alert("Hi All, Employee Id to redirect is: " + empId);
    this._router.navigate(["/details", empId, empName])
  }

}
