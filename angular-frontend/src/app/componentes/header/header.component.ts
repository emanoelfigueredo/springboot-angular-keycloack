import { listCardsTrigger } from 'src/app/animations';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { KeycloakService } from 'keycloak-angular';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    listCardsTrigger
  ]
})
export class HeaderComponent {

  @Input()
  public usuarioEstaLogado!: boolean;
  @Input()
  public paginaAtualHome!: boolean;
  public tamanhoDaTela: number =  window.innerWidth;

  constructor(public readonly authService: AuthService, private readonly router: Router) {

  }

  public homeClicado(): void {
    this.router.navigate(['/home']);
  }

}
