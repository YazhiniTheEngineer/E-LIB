import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private cookie : CookieService,private route : Router){}
  canActivate(){
    if(this.cookie.get("isLoggedIn")==="true"){
      return true;
    }else{
      this.route.navigateByUrl("/login");
      return false;
    }
  }
  
}
