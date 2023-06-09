package com.efigueredo.spring_angular_keycloak_demo.service;

import com.efigueredo.spring_angular_keycloak_demo.domain.LivroRepository;
import com.efigueredo.spring_angular_keycloak_demo.infra.exception.ProjetoException;
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
                .flatMap(this.livroRepository::existsById)
                .flatMap(existe -> {
                    if(existe) {
                        throw new ProjetoException("Recurso não encontrado", "Livro de id " + idLivro +
                                " não existe no sistema.", "", 404);
                    }
                    return Mono.just(idLivro);
                });
    }

}
