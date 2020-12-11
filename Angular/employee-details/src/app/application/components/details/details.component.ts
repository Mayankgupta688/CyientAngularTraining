import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() employee: any;

  constructor(private _dataService: DataService) { 
    this._dataService.notifyDeleteEvent.subscribe(() => {
      console.log("I am Going to delete the Employee with some Id..")
    })
  }

  deleteEmployee(empId: string) {
    this._dataService.deleteEmployee(empId);
    this._dataService.notifyDeleteEvent.emit();
  }

  selectEmployee(empId) {
    this._dataService.notifyEmployeeSelected.emit(empId);
  }

}
