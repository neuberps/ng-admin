import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private loginService: LoginService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sessionUser = sessionStorage.getItem(LoginService.SESSION_USER_KEY);

    if (sessionUser && next.routeConfig?.path === 'login') {
      this.router.navigate(['/home']);
      return false;
    }

    if (!sessionUser && next.routeConfig?.path !== 'login') {
      this.router.navigate(['/login']);
      return false;
    }

    return true;

  }

}
