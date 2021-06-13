import { Component, OnInit ,Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.scss']
})
export class InputchildComponent implements OnInit,OnChanges {

  @Input() mycount;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
  }


}
