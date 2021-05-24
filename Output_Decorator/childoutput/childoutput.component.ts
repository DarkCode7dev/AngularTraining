import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  templateUrl: './childoutput.component.html',
  styleUrls: ['./childoutput.component.css']
})
export class ChildoutputComponent implements OnInit {
  @Output() myevent=new EventEmitter();
  counter=0;
  constructor() { }
  abc(){
    this.myevent.emit(this.counter++)
  }
  ngOnInit(): void {
   
  }

}
