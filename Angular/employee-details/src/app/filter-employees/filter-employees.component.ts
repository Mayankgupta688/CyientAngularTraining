import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter-employees',
  templateUrl: './filter-employees.component.html',
  styleUrls: ['./filter-employees.component.css']
})
export class FilterEmployeesComponent {
  @Input() showFilter: boolean;
  @Output() notifyParentToFilter: EventEmitter<string> = new EventEmitter<string>();
  filterText: string = "";

  constructor() { }

  filterData() {
    debugger;
    this.notifyParentToFilter.emit(this.filterText);
  }

  raiseEvent(data) {
    this.filterText = data;
    this.notifyParentToFilter.emit(data);
  }

}
