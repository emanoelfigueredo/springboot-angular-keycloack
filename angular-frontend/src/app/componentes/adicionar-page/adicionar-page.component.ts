import { ActivatedRoute } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-adicionar-page',
  templateUrl: './adicionar-page.component.html',
  styleUrls: ['./adicionar-page.component.css']
})
export class AdicionarPageComponent {

  public formulario!: FormGroup;

  constructor(private readonly apiService: ApiService, private readonly formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      titulo: ['', Validators.compose([
        Validators.required
      ])],
      autor: ['', Validators.compose([
        Validators.required
      ])],
      urlImagem: ['']
    })
  }

  public adicionarLivro(): void {
    if(this.formulario.valid) {
      const livro = {
        titulo: this.formulario.get("titulo")?.value,
        autor: this.formulario.get("autor")?.value,
        urlImagem: this.formulario.get("urlImagem")?.value
      }
      this.apiService.criar(livro).subscribe();
    }
  }

}
