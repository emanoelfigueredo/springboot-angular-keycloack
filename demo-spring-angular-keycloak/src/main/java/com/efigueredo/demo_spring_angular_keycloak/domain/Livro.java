package com.efigueredo.demo_spring_angular_keycloak.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document("livros")
public class Livro {

    @Id
    private String id;
    private String titulo;
    private String autor;
    private String urlImagem;

}
