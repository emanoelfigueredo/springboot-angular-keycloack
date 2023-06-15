import { KeycloakService } from 'keycloak-angular';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public usuarioEstaLogado!: boolean;
  public paginaAtualHome!: boolean;
  public paginaAtualLista!: boolean;
  public title = 'angular-frontend';

  constructor(private readonly keycloakService: KeycloakService, private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
         this.setup();
      }
    });
  }

  private setup(): void {
    this.keycloakService.isLoggedIn().then(logado => this.usuarioEstaLogado = logado);
    this.paginaAtualHome = window.location.pathname === '/home';
    this.paginaAtualLista = window.location.pathname === '/lista';
  }

}
