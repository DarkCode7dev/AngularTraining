import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL="http://localhost:3000/products/";
@Injectable({
  providedIn: 'root'
})
export class MyproductService {

 //HttpClient ka object bana rahe hai
 constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(URL);
  }

  postData(data:any){
    return this.http.post(URL,data);
  }

  
  delData(id:any){
    return this.http.delete(`${URL}${id}`);
  }
}

