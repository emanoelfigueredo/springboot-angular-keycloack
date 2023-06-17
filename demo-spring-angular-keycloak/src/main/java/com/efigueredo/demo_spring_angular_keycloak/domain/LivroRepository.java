package com.efigueredo.demo_spring_angular_keycloak.domain;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LivroRepository extends ReactiveCrudRepository<Livro, String> {

}
