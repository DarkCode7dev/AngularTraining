import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor( private ser:MessageService) { }
   title = 'Sample';
  mymessage:unknown;
  
  categories=["samsung","sony","lava","i"];

  ngOnInit(){
    this.ser.getMessage().subscribe(message=>{
      console.log(message);
      this.mymessage=message;
    });
    
  }
}
