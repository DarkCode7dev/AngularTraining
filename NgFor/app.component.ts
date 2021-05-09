import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic data binding';

  courses=["A","B","C"];
  jsontypeData=[
    {"name" : "Dev", "age": 44 , "city": "Banglore"},
    {"name" : "Dev", "age": 44 , "city": "Banglore"},
    {"name" : "Dev", "age": 44 , "city": "Banglore"},
    {"name" : "Dev", "age": 44 , "city": "Banglore"},{"name" : "Dev", "age": 44 , "city": "Banglore"}
  ]
}
