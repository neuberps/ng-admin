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
    const sessionToken = sessionStorage.getItem(LoginService.SESSION_TOKEN_KEY);

    if (sessionToken) {
      // Usuário logado
      if (next.routeConfig?.path === 'login') {
        // Redirecionar usuário logado para a página inicial
        this.router.navigate(['/home']);
        return false;
      }
      return true; // Permitir acesso a usuários logados
    } else {
      // Usuário não logado
      if (next.routeConfig?.path === 'login') {
        return true; // Permitir acesso à rota de login para usuários não logados
      } else {
        // Redirecionar usuários não logados para a página de login
        this.router.navigate(['/login']);
        return false;
      }
    }
  }

}
