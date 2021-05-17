
<app-message [item] = "ParentItem"></app-message>
<table class="table table-dark" border="1" style="color:black">
   <tr>
     <td>GMId </td>
     <td>CardOwnerName </td>
     <td>CardNumber </td>
     <td>expiryDate </td>
     <td>amount </td>
     <td>Delete</td>
   </tr>
   <tr *ngFor="let item of userdata">
    <td>{{item.GMId}} </td>
    <td>{{item.CardOwnerName}} </td>
    <td>{{item.CardNumber}} </td>
    <td> {{item.ExpiryDate}}</td>
    <td>{{item.Amount}} </td>
    <td><a (click)="onDelete(item.GMId)"><b>X</b></a></td>
    <!-- <td><a (click)="onUpdate(item.GMId)"><b>UPDATE</b></a></td> -->
  </tr>
</table>


=====================================
import { Component, OnInit } from '@angular/core';
import {CommonService} from 'src/app/common.service'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  ParentItem= 'List of Gym Members ';
 userdata;

  constructor(private service: CommonService) {}

  ngOnInit() {
  this.getList();
  }

  greet(){
    alert("Data Saved");
  }

  onDelete(j){
   this.service.deleteDetail(j).subscribe(data=>{
    console.log(data);
   }),

 this.getList();
  }

getList(){
  this.service.getData().subscribe(data=>{
    console.warn(data);
    this.userdata = data;
  })
}

}






====================Create

<div class="form-group col-md-7">
  <form [formGroup]="reactiveForm"  style="color:green"(ngSubmit)="onSubmit()">
    <div class="form-group">
      <!-- <label  class="control-label" style="margin-right:10px">ID: </label> -->
    </div>
    <div class="form-group">
      <input type="hidden"
        [ngClass]="{
          'is-invalid':
          reactiveForm.get('GMId').errors &&
          reactiveForm.get('GMId').touched
        }"
        class="form-control"
        placeholder="Known as"
        formControlName="GMId"
      />
      <div
        class="invalid-feedback"
        *ngIf="
        reactiveForm.get('cardOwnerName').touched &&
        reactiveForm.get('cardOwnerName').hasError('required')">
      Card Owner Name as is required
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" style="margin-right:10px">Card Owner Name: </label>
    </div>
    <div class="form-group">
      <input
        [ngClass]="{
          'is-invalid':
          reactiveForm.get('cardOwnerName').errors &&
          reactiveForm.get('cardOwnerName').touched
        }"
        class="form-control"
        placeholder="Known as"
        formControlName="cardOwnerName"
      />
      <div
        class="invalid-feedback"
        *ngIf="
        reactiveForm.get('cardOwnerName').touched &&
        reactiveForm.get('cardOwnerName').hasError('required')
        "
      >
      Card Owner Name as is required
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" style="margin-right:10px">Card Number: </label>

    </div>
    <div class="form-group">
      <input
        [ngClass]="{
          'is-invalid':
          reactiveForm.get('cardNumber').errors &&
          reactiveForm.get('cardNumber').touched
        }"
        class="form-control"
        placeholder="Known as"
        formControlName="cardNumber"
      />
      <div
        class="invalid-feedback"
        *ngIf="
        reactiveForm.get('cardNumber').touched &&
        reactiveForm.get('cardNumber').hasError('required')
        "
      >
      Card Number Name as is required
      </div>
    </div>

    <div class="form-group">
      <label class="control-label" style="margin-right:10px">Expiration Date: </label>

    </div>
    <div class="form-group">
      <input
        [ngClass]="{
          'is-invalid':
          reactiveForm.get('expiryDate').errors &&
          reactiveForm.get('expiryDate').touched
        }"
        class="form-control"
        placeholder="expirationDate"
        formControlName="expiryDate"
      />
      <div
        class="invalid-feedback"
        *ngIf="
        reactiveForm.get('expiryDate').touched &&
        reactiveForm.get('expiryDate').hasError('required')
        "
      >
      Card Owner Name as is required
      </div>
    </div>
    <div class="form-group">
      <label class="control-label" style="margin-right:10px">Money: </label>

    </div>
    <div class="form-group">
      <input
      [ngClass]="{
        'is-invalid':
        reactiveForm.get('amount').errors &&
        reactiveForm.get('amount').touched
      }"
        class="form-control"
        placeholder="money"
        formControlName="amount"
      />
      <div
        class="invalid-feedback"
        *ngIf="reactiveForm.get('money').touched && reactiveForm.get('money').hasError('required')"
      >
      Money is required
      </div>
    </div>
    <button type="submit" class="btn btn-primary"  (click)="callGreet()">Save</button>

  </form>
  </div>
========================================
import {CommonService} from 'src/app/common.service'
import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl,Validators,FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { User } from 'src/app/user';
import { AfterContentInit } from '@angular/core';
import { AfterContentChecked } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, AfterContentInit,AfterContentChecked ,AfterViewInit ,AfterViewChecked ,OnDestroy   {
  reactiveForm: FormGroup;
  user: User ;

@Input() item:string;
// @Output() gretEvent = new EventEmitter();
@Input() time ;
  constructor( private fb: FormBuilder,private http: HttpClient,private CommonService: CommonService) { }



  ngOnInit() {
    this.createreactiveForm();
  }


  createreactiveForm() {
    this.reactiveForm = this.fb.group(
      {
        GMId:[0],
         cardOwnerName : ['', Validators.required],
         cardNumber: ['', Validators.required],
         expiryDate  : ['', Validators.required],
         amount: ['', Validators.required],
      });

  }


  // callGreet(){
  //   this.gretEvent.emit();
  // }
  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log("Form Submitted!");
      this.user = Object.assign({},this.reactiveForm.value);
      this.CommonService.postDetail(this.user).subscribe(()=>{
        console.log("registration successsufull");
        }, error=>{
          console.error(error);
        }
        )
        console.table(this.reactiveForm.value);
      this.reactiveForm.reset();
    }
  }


   ngAfterContentInit(){
    console.log("Entered ngAfterContentInit");
    console.log("executed only once after the first ngDoCheck()");
  }
ngAfterContentChecked(){
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  console.log("Entered ngAfterContentChecked");
   console.log("executed after ngAfterContentInit() and every after triggered ngDoCheck()");

}

ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  console.log("Entered ngAfterViewInit");
  console.log("Executed after the first ngAfterContentChecked()")

}

ngAfterViewChecked(){
  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  console.log("Entered ngAfterViewChecked");
  console.log("Executed after the ngAfterViewInit() and every after triggered ngAfterContentChecked().")
}

  ngOnDestroy(){
    console.log("When Component dom elements are removed this method will be called. Can also be used for unsubscribe")

  }
}
