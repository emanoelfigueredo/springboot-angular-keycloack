import { KeycloakService } from 'keycloak-angular';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { KeycloakAuthGuard } from 'keycloak-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {

  constructor(protected override readonly router: Router,
              protected readonly keycloakService: KeycloakService) {
      super(router, keycloakService);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    this.redirecionarParaLoginSeNaoEstiverAutenticado(state);
    const keycloakRoles = this.roles;
    const rolesNecessarias = route.data['roles'];
    if(this.paginaPublica(rolesNecessarias)) {
      return true;
    }
    if(this.rolesDoUsuarioAtendemAsRolesDaPagina(rolesNecessarias, keycloakRoles)) {
      return true;
    }
    this.router.navigate(['acesso-negado']);
    return false;
  }

  private async redirecionarParaLoginSeNaoEstiverAutenticado(state: RouterStateSnapshot) {
    if(!this.authenticated) {
      await this.keycloakService.login({
        redirectUri: window.location.origin + state.url
      });
    }
  }

  private paginaPublica(rolesNecessarias: any[]): boolean {
    return !(rolesNecessarias instanceof Array) || rolesNecessarias.length == 0;
  }

  private rolesDoUsuarioAtendemAsRolesDaPagina(rolesNecessarias: any[], keycloakRoles: string[]): boolean {
    return rolesNecessarias.every(role => keycloakRoles.includes(role));
  }

}
