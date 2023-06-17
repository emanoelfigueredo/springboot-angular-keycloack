package com.efigueredo.demo_spring_angular_keycloak.service;

import com.efigueredo.demo_spring_angular_keycloak.domain.LivroRepository;
import com.efigueredo.demo_spring_angular_keycloak.infra.exception.ProjetoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class VerificadorLivroImpl implements VerificadorLivro {

    @Autowired
    private LivroRepository livroRepository;

    @Override
    public Mono<String> lancarExcecaoQuandoLivroNaoExistirPorId(String idLivro) {
        return Mono.just(idLivro)
                .doOnNext(System.out::println)
                .flatMap(this.livroRepository::existsById)
                .doOnNext(System.out::println)
                .flatMap(existe -> {
                    if(existe) {
                        return Mono.just(idLivro);
                    }
                    throw new ProjetoException("Recurso não encontrado", "Livro de id " + idLivro +
                            " não existe no sistema.", "", 404);
                });
    }

}
