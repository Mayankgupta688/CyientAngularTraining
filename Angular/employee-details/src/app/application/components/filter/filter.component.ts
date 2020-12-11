import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  
  filterText: string = "";

  constructor(private _dataService: DataService) { }

  filterData(text) {
    debugger;
    this.filterText = text;
    this._dataService.notifyParentToFilter.emit(text);
  }

}
