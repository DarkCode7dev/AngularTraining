import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserService } from '../services/myser.service';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private myser:MyserService) { }
  canActivate(){
    if(this.myser.checkLogin()){
      return true;
    }
    else{
      Swal.fire('Oops...', 'Something went wrong!', 'error');
      return false;
    }
  }
  
  }
  

