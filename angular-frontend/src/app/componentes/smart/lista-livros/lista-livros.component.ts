import { KeycloakService } from 'keycloak-angular';
import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  public usuarioLogadoAdmin!: boolean;

  constructor(private readonly keycloakService: KeycloakService) {

  }

  ngOnInit(): void {
    this.usuarioLogadoAdmin = this.usuarioLogadoEhAdmin();
    console.log(this.usuarioLogadoAdmin);
  }

  public usuarioLogadoEhAdmin(): boolean {
    return this.keycloakService.getUserRoles().indexOf('admin') !== -1;
  }

}
