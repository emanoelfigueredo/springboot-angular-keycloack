package com.efigueredo.spring_angular_keycloak_demo.service;

import reactor.core.publisher.Mono;

public interface VerificadorLivro {

    Mono<String> lancarExcecaoQuandoLivroNaoExistirPorId(String idLivro);

}
