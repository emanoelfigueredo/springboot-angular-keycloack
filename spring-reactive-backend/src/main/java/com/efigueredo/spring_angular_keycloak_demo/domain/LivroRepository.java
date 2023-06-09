package com.efigueredo.spring_angular_keycloak_demo.domain;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository extends ReactiveCrudRepository<Livro, String> {

}
