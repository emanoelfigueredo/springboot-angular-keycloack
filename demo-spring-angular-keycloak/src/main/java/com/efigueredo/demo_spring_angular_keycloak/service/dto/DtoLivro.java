package com.efigueredo.demo_spring_angular_keycloak.service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class DtoLivro {

    private String titulo;
    private String autor;
    private String urlImagem;

}
