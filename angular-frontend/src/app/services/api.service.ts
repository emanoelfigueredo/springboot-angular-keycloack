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

  public listar(): Observable<Livro> {
    return this.httpClient.get<Livro>(this.api);
  }

  public criar(livro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.api, livro);
  }

  public atualizar(livro: Livro, id: number): Observable<Livro> {
    const apiPath = `${this.api}/${id}`
    return this.httpClient.put<Livro>(apiPath, livro);
  }

  public deletar(livro: Livro, id: number): Observable<any> {
    const apiPath = `${this.api}/${id}`
    return this.httpClient.delete<Livro>(apiPath);
  }

}
