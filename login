
<div class="d-flex justify-content-center"><a [routerLink]="['customers']" class="btn btn-info" style="color:red">List</a><-------------><a [routerLink]="['create']" class="btn btn-info" [item] = "ParentItem"  (gretEvent)="greet()" style="color:red">Create</a></div>
<div><router-outlet (gretEvent)="greet()"></router-outlet></div>



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  greet(){
    alert("Data Saved");
  }


}
