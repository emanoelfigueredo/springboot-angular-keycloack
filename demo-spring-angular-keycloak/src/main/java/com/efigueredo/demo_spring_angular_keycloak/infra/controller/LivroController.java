package com.efigueredo.demo_spring_angular_keycloak.infra.controller;

import com.efigueredo.demo_spring_angular_keycloak.domain.Livro;
import com.efigueredo.demo_spring_angular_keycloak.service.LivroService;
import com.efigueredo.demo_spring_angular_keycloak.service.dto.DtoLivro;
import jakarta.annotation.security.RolesAllowed;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/livros")
@CrossOrigin("http://127.0.0.1:4200")
public class LivroController {

    @Autowired
    private LivroService livroService;

    @GetMapping
    public Flux<Livro> listar() {
        return this.livroService.listar();
    }

    @GetMapping("{id}")
    public Mono<Livro> detalhar(@PathVariable("id") String idLivro) {
        return this.livroService.detalhar(idLivro);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Mono<Livro> criar(@RequestBody DtoLivro dtoLivro) {
        return this.livroService.salvar(dtoLivro);
    }

    @PutMapping("{id}")
    public Mono<Livro> atualizar(@PathVariable("id") String idLivro, @RequestBody DtoLivro dtoLivro) {
        return this.livroService.atualizar(dtoLivro, idLivro);
    }

    @DeleteMapping("{id}")
    public Mono<Void> deletar(@PathVariable("id") String idLivro) {
        System.out.println("removendo");
        return this.livroService.remover(idLivro);
    }

}
