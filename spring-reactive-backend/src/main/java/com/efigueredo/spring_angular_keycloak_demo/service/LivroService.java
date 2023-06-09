package com.efigueredo.spring_angular_keycloak_demo.service;

import com.efigueredo.spring_angular_keycloak_demo.domain.Livro;
import com.efigueredo.spring_angular_keycloak_demo.service.dto.DtoLivro;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface LivroService {

    Mono<Livro> salvar(DtoLivro dtoLivro);
    Mono<Livro> atualizar(DtoLivro dtoLivro, String idLivro);
    Mono<Void> remover(String idLivro);
    Mono<Livro> detalhar(String idLivro);
    Flux<Livro> listar();

}
