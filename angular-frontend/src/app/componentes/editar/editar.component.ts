import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {

  private id!: string;
  public formulario!: FormGroup;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.obterIdLivro();
    this.criarFormGroup();
  }

  private obterIdLivro(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;
  }

  private criarFormGroup(): void {
    this.apiService.detalhar(this.id).subscribe(livro => {
      this.formulario = this.formBuilder.group({
        titulo: [livro.titulo, Validators.compose([
          Validators.required
        ])],
        autor: [livro.autor, Validators.compose([
          Validators.required
        ])],
        urlImagem: [livro.urlImagem, Validators.compose([
          Validators.required
        ])]
      })
    })
  }

  public atualizarLivro(): void {
    if(this.formulario.valid) {
      const livro = {
        titulo: this.formulario.get("titulo")?.value,
        autor: this.formulario.get("autor")?.value,
        urlImagem: this.formulario.get("urlImagem")?.value,
      }
      this.apiService.atualizar(livro, this.id).subscribe(() => {
        this.router.navigate(['/lista']);
      })
    }
  }

}
