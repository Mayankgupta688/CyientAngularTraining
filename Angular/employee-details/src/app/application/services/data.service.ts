import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  empList: any[] = [];
  notifyDeleteEvent: EventEmitter<void> = new EventEmitter<void>();
  notifyParentToFilter: EventEmitter<string> = new EventEmitter<string>();
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
    return this._http.get("https://5a530e1477e1d20012fa066a.mockapi.io/employeedata");
  }

  deleteEmployee(empId) {
    this.empList = this.empList.filter((employee) => {
      return employee.id != empId
    });
  }

  returnObservable(): Observable<string> {
    return Observable.create((observer) => {
      setInterval(() => {
          var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
          observer.next(currentTime)
      }, 1000)
    });
  }
}
