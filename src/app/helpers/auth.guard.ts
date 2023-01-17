import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authservice: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const user = this.authservice.getUser();
      if(user){
        if (route.data['scopes'] && route.data['scopes'].indexOf(user.scopes) === -1){
          this.router.navigate(['/']);
          return false;
        }
        return true;
      }
      this.router.navigate(['/home']);
    return false;
  }
}