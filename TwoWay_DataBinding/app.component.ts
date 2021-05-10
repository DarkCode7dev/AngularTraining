import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Property Binding";
  courses=[];
  buttonDisabled=true;
abc(){
  this.courses=["A","B","C"]
}
}
