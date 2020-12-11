import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{
  filterInfo: string = "";
  constructor(private _dataService: DataService) { 
    this._dataService.notifyParentToFilter.subscribe((text) => {
      this.filterInfo = text
    })
  }

}
