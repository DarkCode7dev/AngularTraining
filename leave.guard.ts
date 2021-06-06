import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersComponent } from '../components/users/users.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<UsersComponent> {
  canDeactivate(component:UsersComponent){
    return component.canExit ? component.canExit():true;
  }
  
}
