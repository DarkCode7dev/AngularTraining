import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserService {

constructor(private http:HttpClient) { }


 getData(url){
  return this.http.get(url);
 }
}
