package com.efigueredo.demo_spring_angular_keycloak.infra.exception;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class TratadorExcecoes {

    @Autowired
    private ModelMapper modelMapper;

    @ExceptionHandler(ProjetoException.class)
    public RespostaErro tratarProjetoException(ProjetoException e) {
        return this.modelMapper.map(e, RespostaErro.class);
    }

}
