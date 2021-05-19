import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' 
@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.scss']
})
export class TemplatedrivenComponent implements OnInit {

  name;
  mobile;
  constructor() { }

  ngOnInit() {
  }

  postData(){
    //Making Object
    let formdata={name:this.name, mobile:this.mobile}

    console.log(JSON.stringify(formdata));
  }
}
