import { enviroments } from 'src/environments/environments';
import { Livro } from './../model/livro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: string = `${enviroments.apiPath}`;

  constructor(private readonly httpClient: HttpClient) { }

  public listar(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.api);
  }

  public criar(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.api, livro);
  }

  public atualizar(livro: Livro, id: string): Observable<Livro> {
    const apiPath = `${this.api}/${id}`
    return this.httpClient.put<Livro>(apiPath, livro);
  }

  public deletar(id: string): Observable<void> {
    const apiPath = `${this.api}/${id}`
    return this.httpClient.delete<void>(apiPath);
  }

  public detalhar(id: string): Observable<Livro> {
    const apiPath = `${this.api}/${id}`;
    return this.httpClient.get<Livro>(apiPath);
  }

}
