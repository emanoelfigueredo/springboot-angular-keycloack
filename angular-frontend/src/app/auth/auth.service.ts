import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly keycloakService: KeycloakService) { }

  public logout(): void {
    this.keycloakService.logout('http://localhost:4200/home')
    .then(() => {
      this.keycloakService.clearToken()
    });
  }

  public login(): void {
    this.keycloakService.login();
  }

}
