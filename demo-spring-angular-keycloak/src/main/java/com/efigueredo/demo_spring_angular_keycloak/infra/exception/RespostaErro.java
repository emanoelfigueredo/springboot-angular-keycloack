package com.efigueredo.demo_spring_angular_keycloak.infra.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RespostaErro {

    private String title;
    private String detail;
    private String type;
    private int status;

}
