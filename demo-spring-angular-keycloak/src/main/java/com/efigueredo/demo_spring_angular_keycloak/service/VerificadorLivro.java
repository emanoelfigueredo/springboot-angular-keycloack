package com.efigueredo.demo_spring_angular_keycloak.service;

import reactor.core.publisher.Mono;

public interface VerificadorLivro {

    Mono<String> lancarExcecaoQuandoLivroNaoExistirPorId(String idLivro);

}
