import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-livro',
  templateUrl: './card-livro.component.html',
  styleUrls: ['./card-livro.component.css']
})
export class CardLivroComponent {

  @Input()
  public usuarioLogadoAdmin!: boolean;

}
