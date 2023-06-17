import { ApiService } from './../../../services/api.service';
import { KeycloakService } from 'keycloak-angular';
import { Component, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Livro } from 'src/app/model/livro';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  public usuarioLogadoAdmin!: boolean;
  public livros: Livro[] = [];

  constructor(private readonly keycloakService: KeycloakService, private readonly apiService: ApiService) { }

  public ngOnInit(): void {
    this.usuarioLogadoAdmin = this.usuarioLogadoEhAdmin();
    this.apiService.listar().subscribe(livrosRecebidos => this.livros = livrosRecebidos)
  }

  public usuarioLogadoEhAdmin(): boolean {
    return this.keycloakService.getUserRoles().indexOf('admin') !== -1;
  }

}
