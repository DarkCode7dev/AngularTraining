import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {ChildComponent} from '../child/child.component';
@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss']
})
export class ViewchildComponent implements OnInit,AfterViewInit { 
  @ViewChild(ChildComponent,{static: false}) mychild:ChildComponent;
  constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
     console.log(this.mychild.title);
     console.log(this.mychild.getData());
  }
}