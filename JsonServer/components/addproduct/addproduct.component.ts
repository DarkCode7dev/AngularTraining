import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyproductService } from 'src/app/services/myproduct.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {
myForm:FormGroup;
constructor(private fb: FormBuilder,private pro:MyproductService, private router:Router) { 
  this.myForm= this.fb.group({
    pname: ['', Validators.required],
    price: ['', Validators.required],
    quantity: ['', Validators.required]
  })
}


  ngOnInit() {
  }

  postProduct(){
    let formData=this.myForm.getRawValue();
    this.pro.postData(formData)
    .subscribe(res=>{
      this.router.navigate(['/products']);
    })
  }

}
