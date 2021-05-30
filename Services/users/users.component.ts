import { Component, OnInit } from '@angular/core';

//kisi bhi api ko call karne ke liye HttpClient ko import karna padega

import { MyserService } from 'src/app/services/myser.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

 //HttpClient ka object bana rahe hai
 constructor(private myser:MyserService) { }


  //ek variable initialise karo any type ka jo use hoga response ka data use karne me
usersData:any;


//loader image ke liye 
loading:boolean=true;

  ngOnInit() {
    //load hote hi data chayiye
    const URL="https://jsonplaceholder.typicode.com/users";
    // call kar rahe hai URL ko
    this.myser.getData(URL)
.subscribe(res=>{
  //sabse pehle devloper dekhega console pe ki response kya diya hai
  console.log(res); 

  this.loading=false;

  //this use karte hai is class ke variable se pehle agar unhe age use kar rahe hai to
  //response ko dusre variable me store kara rahe hai taki wo age use kiya jaaa sake
  this.usersData=res;
},
err=>{
  //error handling
  console.log(err); 
})  
  }

}
