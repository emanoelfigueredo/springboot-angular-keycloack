package com.efigueredo.spring_angular_keycloak_demo.infra.controller;

import com.efigueredo.spring_angular_keycloak_demo.domain.Livro;
import com.efigueredo.spring_angular_keycloak_demo.service.LivroService;
import com.efigueredo.spring_angular_keycloak_demo.service.dto.DtoLivro;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("api/livros")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    @RolesAllowed({"user"})
    public Flux<Livro> listar() {
        return this.livroService.listar();
    }

    @GetMapping("{id}")
    @RolesAllowed({"user"})
    public Mono<Livro> detalhar(@PathVariable("id") String idLivro) {
        return this.livroService.detalhar(idLivro);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @RolesAllowed({"admin"})
    public Mono<Livro> criar(@RequestBody DtoLivro dtoLivro) {
        return this.livroService.salvar(dtoLivro);
    }

    @PutMapping("{id}")
    @RolesAllowed({"admin"})
    public Mono<Livro> atualizar(@PathVariable("id") String idLivro, @RequestBody DtoLivro dtoLivro) {
        return this.livroService.atualizar(dtoLivro, idLivro);
    }

    @DeleteMapping("{id}")
    @RolesAllowed({"admin"})
    public Mono<Void> deletar(@PathVariable("id") String idLivro) {
        return this.livroService.remover(idLivro);
    }


}
