import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../styles/common.style.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _http: HttpClient) { }

  userDetails: any = {};

  ngOnInit(): void {
    var userId = this._route.snapshot.params.userId;

    alert("data for " + this._route.snapshot.params.userName);

    this._http.get(`https://5a530e1477e1d20012fa066a.mockapi.io/employeedata/${userId}`).subscribe((data: any) => {
      this.userDetails = data;
    })
  }

}
