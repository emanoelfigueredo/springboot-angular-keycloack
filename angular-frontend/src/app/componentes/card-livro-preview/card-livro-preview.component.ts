import { ApiService } from '../../services/api.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-livro-preview',
  templateUrl: './card-livro-preview.component.html',
  styleUrls: ['./card-livro-preview.component.css']
})
export class CardLivroPreviewComponent {

  @Input()
  public titulo!: string;

  @Input()
  public autor!: string;

  @Input()
  public urlImagem!: string;

  public obterTitulo(): string {
    if(this.titulo) {
      return this.titulo;
    }
    return "Título";
  }

  public obterAutor(): string {
    if(this.autor) {
      return this.autor;
    }
    return "Autor";
  }

  public obterUrlImagem(): string {
    if(this.urlImagem) {
      return this.urlImagem;
    }
    return "https://filantropia.tv/wp-content/uploads/2014/04/news_text_1095.jpg";
  }

  public teste(): void {
    console.log("teste")
  }

}
