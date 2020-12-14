import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: ['./selected.component.css']
})
export class SelectedComponent {

  showData: boolean = false;

  selectedEmployee = {};
  constructor(private _dataService: DataService) { 
    this._dataService.notifyEmployeeSelected.subscribe((employeeId) => {
      this.showData = true;
      this._dataService.getEmployeeList().subscribe((data: any[]) => {
        this.selectedEmployee = data.filter(employee => {
          return employee.id == employeeId
        })[0]
      })
    })
  }

}
