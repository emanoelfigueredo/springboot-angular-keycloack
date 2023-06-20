import { Router } from '@angular/router';
import { Livro } from '../../model/livro';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { tratarErrosPadroes } from 'src/utils/tratador-erros';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css'],
})
export class CardLivroComponent {
  @Input()
  public livro!: Livro;

  @Input()
  public usuarioLogadoAdmin!: boolean;

  @Output()
  private eventoRecarregarListaLivros = new EventEmitter();

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}

  public removerLivro(): void {
    this.apiService
      .deletar(this.livro.id as string)
      .subscribe(
        () => this.eventoRecarregarListaLivros.emit(),
        erro => tratarErrosPadroes(erro, this.router)
      );
  }

  public atualizarLivro(): void {
    this.router.navigate(['/edit/' + this.livro.id]);
  }
}
