import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators,AbstractControl} from '@angular/forms';
function ageRangeValidators(control:AbstractControl){
   if(control.value!==undefined && (isNaN(control.value) || control.value<18 || control.value>45)){
     return {'errAgeMsg':true}
   }
   return null;
}
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  status=true;
  myForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.myForm=this.fb.group({
      name:["",[Validators.required,Validators.pattern("[a-zA-Z ]+")]],
      mobile:["",Validators.required],
      age:["",[Validators.required,ageRangeValidators]]
    })
  }

  ngOnInit(): void {
  }
  postLogin(){
    let formData=this.myForm.getRawValue();
    console.log(formData);
  }
}
