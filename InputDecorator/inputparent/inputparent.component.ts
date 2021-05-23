import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputparent',
  templateUrl: './inputparent.component.html',
  styleUrls: ['./inputparent.component.scss']
})
export class InputparentComponent implements OnInit {

  counter=0;

  constructor() { }

  ngOnInit() {
  }
  abc(){
    this.counter++;
  }

}
