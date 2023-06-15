import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  @Input()
  public usuarioEstaLogado!: boolean;
  @Input()
  public paginaAtualLista!: boolean;

}
