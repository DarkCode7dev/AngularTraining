import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-inputchild',
  templateUrl: './inputchild.component.html',
  styleUrls: ['./inputchild.component.scss']
})
export class InputchildComponent implements OnInit {

  @Input() mycount;
  constructor() { }

  ngOnInit() {
  }

}
