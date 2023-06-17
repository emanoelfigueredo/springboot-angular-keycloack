package com.efigueredo.demo_spring_angular_keycloak.infra.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProjetoException extends RuntimeException {

    private String title;
    private String detail;
    private String type;
    private int status;

}
