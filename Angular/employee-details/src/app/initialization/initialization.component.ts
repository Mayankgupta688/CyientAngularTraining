import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../application/services/data.service';

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My Name is Mayank")
    }, 4000) 
  })
}

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {
  userName = "Mayank";
  dataSubscripton = null;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSubscripton = this.dataService.returnObservable().subscribe((data) => {
      console.log(data)
    })
  }

  updateUserName() {
    debugger;
    this.userName = "Anshul 1";
  }

  ngOnDestroy() {
    this.dataSubscripton();
  }
}


@Component({
  selector: 'app-data-comp',
  template: '<h2>User Name: {{userName}} {{dataSubscripton}}</h2>',
  styleUrls: ['./initialization.component.css']
})
export class AppDataComponent implements OnInit {
  @Input() userName;
  myUserName: string = ""
  dataSubscripton = null;

  ngOnChanges(dataChange) {
    debugger;
  }

  ngDoCheck() {
    if(this.userName == "Anshul") {
      this.dataSubscripton = this.userName + " Gupta";
    }
  }

  constructor(private dataService: DataService) {
    debugger
  }

  ngOnInit() {
    debugger
  }

  ngOnDestroy() {
    this.dataSubscripton();
  }
}
