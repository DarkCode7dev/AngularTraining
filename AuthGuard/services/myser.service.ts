import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserService {
isAuthenticate=false; 
constructor(private http:HttpClient) { }


 getData(url){
  return this.http.get(url);
 }

 checkLogin(){
   let uname="anuj";
   let pass="12345";

   if(uname=="anujj" && pass=="12345"){
     this.isAuthenticate=true;
     return this.isAuthenticate;
   }
   else{
    this.isAuthenticate=false;
    return this.isAuthenticate;
   }

 }
}
