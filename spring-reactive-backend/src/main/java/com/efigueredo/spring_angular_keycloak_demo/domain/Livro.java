package com.efigueredo.spring_angular_keycloak_demo.domain;

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

}
