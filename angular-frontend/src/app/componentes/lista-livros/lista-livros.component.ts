import { ApiService } from '../../services/api.service';
import { KeycloakService } from 'keycloak-angular';
import { Component, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Livro } from 'src/app/model/livro';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { tratarErrosPadroes } from 'src/utils/tratador-erros';
import { listCardsTrigger } from 'src/app/animations';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnInit {

  public usuarioLogadoAdmin!: boolean;
  public livros: Livro[] = [];

  constructor(private readonly keycloakService: KeycloakService, private readonly apiService: ApiService, private readonly router: Router) { }

  public ngOnInit(): void {
    this.usuarioLogadoAdmin = this.usuarioLogadoEhAdmin();
    this.apiService.listar().subscribe({
      next: livrosRecebidos => this.livros = livrosRecebidos,
      error: erro => tratarErrosPadroes(erro, this.router)
    })
  }

  public usuarioLogadoEhAdmin(): boolean {
    return this.keycloakService.getUserRoles().indexOf('admin') !== -1;
  }

}
