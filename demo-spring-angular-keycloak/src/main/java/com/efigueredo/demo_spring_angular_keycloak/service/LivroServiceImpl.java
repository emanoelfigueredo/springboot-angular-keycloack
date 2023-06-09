package com.efigueredo.demo_spring_angular_keycloak.service;

import com.efigueredo.demo_spring_angular_keycloak.domain.Livro;
import com.efigueredo.demo_spring_angular_keycloak.domain.LivroRepository;
import com.efigueredo.demo_spring_angular_keycloak.service.dto.DtoLivro;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class LivroServiceImpl implements LivroService {

    @Autowired
    private LivroRepository livroRepository;

    @Autowired
    private VerificadorLivro verificadorLivro;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Mono<Livro> salvar(DtoLivro dtoLivro) {
        return Mono.just(dtoLivro)
                .map(dto -> this.modelMapper.map(dto, Livro.class))
                .flatMap(livro -> this.livroRepository.save(livro));
    }

    @Override
    public Mono<Livro> atualizar(DtoLivro dtoLivro, String idLivro) {
        return Mono.just(idLivro)
                .flatMap(this.verificadorLivro::lancarExcecaoQuandoLivroNaoExistirPorId)
                .flatMap(this.livroRepository::findById)
                .map(livro -> {
                    livro.setAutor(dtoLivro.getAutor());
                    livro.setTitulo(dtoLivro.getTitulo());
                    livro.setUrlImagem(dtoLivro.getUrlImagem());
                    return livro;
                })
                .flatMap(this.livroRepository::save);
    }

    @Override
    public Mono<Void> remover(String idLivro) {
        return Mono.just(idLivro)
                .flatMap(this.verificadorLivro::lancarExcecaoQuandoLivroNaoExistirPorId)
                .doOnNext(System.out::println)
                .flatMap(this.livroRepository::deleteById);
    }

    @Override
    public Mono<Livro> detalhar(String idLivro) {
        return Mono.just(idLivro)
                .flatMap(this.verificadorLivro::lancarExcecaoQuandoLivroNaoExistirPorId)
                .flatMap(this.livroRepository::findById);
    }

    @Override
    public Flux<Livro> listar() {
        return this.livroRepository.findAll();
    }

}
