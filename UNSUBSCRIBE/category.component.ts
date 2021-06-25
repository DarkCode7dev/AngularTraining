import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  cname='';
  parData: any;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() {
    this.ar.params.subscribe(par=>{
      this.cname=par.cat;
    })
  }

    ngOnDestroy(){
      if (this.parData) {
        this.parData.unsubscribe();
      }
    }

}
