import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import appUrl from "../../env";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empList: any[] = [];
  notifyDeleteEvent: EventEmitter<void> = new EventEmitter<void>();
  notifyParentToFilter: EventEmitter<string> = new EventEmitter<string>();
  notifyEmployeeSelected: EventEmitter<string> = new EventEmitter<string>();

  someObservable = null;

  constructor(private _http: HttpClient) {
    this.notifyDeleteEvent.subscribe(() => {
      console.log("Request for Employee Deleteion...")
    })

    this.someObservable = Observable.create((observer) => {
      setInterval(() => {
          var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
          observer.next(currentTime)
      }, 1000)
    });
  }

  getEmployeeList(): Observable<any> {

    if(this.empList.length) {
      return of(this.empList);
    }

    return this._http.get(`${appUrl}employeeList`);
  }

  deleteEmployee(empId) {

    this._http.delete(`${appUrl}employeeList/${empId}`).subscribe((data) => {
      debugger;
    })
  }

  returnObservable(): Observable<string> {
    return Observable.create((observer) => {
      setInterval(() => {
          var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
          observer.next(currentTime)
      }, 1000)
    });
  }

  addEmployee(userId, userName, userAvatar) {
    this._http.post(`http://localhost:3000/employeeList`, {
      id: userId,
      name: userName,
      avatar: userAvatar,
      createdAt: new Date().toString()
    }).subscribe(() => {
      alert("Data Updated....")
    }, (err) => {
      this._http.post(`http://localhost:3000/employeeList`, {
        id: Math.floor(Math.random() * 100) + 110,
        name: userName,
        avatar: userAvatar,
        createdAt: new Date().toString()
      }).subscribe(() => {
        alert("Data Updated....")
      }, (err) => {
        alert("data Updation Failed...")
      })
    }, () => {
      alert("Complete...")
    })
  }
}
