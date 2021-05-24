import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentoutput',
  templateUrl: './parentoutput.component.html',
  styleUrls: ['./parentoutput.component.scss']
})
export class ParentoutputComponent implements OnInit {
  counter;
  constructor() { }

  ngOnInit(): void {
  }
  xyz(val){
    this.counter=val;
  }
} 