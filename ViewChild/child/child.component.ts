import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
title="Devesh Puri";
  constructor() { }

  ngOnInit() {
  }

  getData(){
    return ['Anil','Sunil','Ashok']
  }
}
