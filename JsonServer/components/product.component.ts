import { Component, OnInit } from '@angular/core';
import { MyproductService } from 'src/app/services/myproduct.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  proData: any;

  constructor(private pro:MyproductService) { }

  ngOnInit():void {
    this.pro.getProducts()
    .subscribe(res=>{
      this.proData=res;
    })
  }

  delProduct(id:any){
    this.pro.delData(id)
    .subscribe(res=>{
      alert("Deleted")
    })

    this.pro.getProducts()
    .subscribe(res=>{
      this.proData=res;
    })
  }

}
