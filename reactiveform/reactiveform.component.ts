import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
myForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.myForm=this.fb.group({
      name:["", [Validators.required,Validators.pattern("[a-zA-Z]+")]],
      mobile:["",Validators.required]
    })
  }

  ngOnInit() {
  }
  postLogin(){
    let formData= this.myForm.getRawValue();
    console.log(formData);
  }
}
