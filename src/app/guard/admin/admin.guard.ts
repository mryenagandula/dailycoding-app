import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(public authService:AuthenticationService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const auth = this.authService.userDetails ? JSON.parse(this.authService.userDetails) :null;
    if(auth){
      const roles= auth.user.roles.filter(role=>role.title === 'ADMIN');
      if(roles && roles.length>0){
        return true;
      }
    }
    this.router.navigate(['/forbidden']);
  }
  
}
