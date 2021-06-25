import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  cname='';
  parData: any;
  mymessage:string='';
  constructor(private ar:ActivatedRoute, private mesg:MessageService) { }

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

      sendMessage(){
        alert(this.mymessage);
        this.mesg.sendMessage(this.mymessage);
      }
}
