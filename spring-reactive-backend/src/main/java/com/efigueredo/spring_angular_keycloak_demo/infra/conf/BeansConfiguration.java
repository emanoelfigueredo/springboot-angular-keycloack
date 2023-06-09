package com.efigueredo.spring_angular_keycloak_demo.infra.conf;

import com.efigueredo.spring_angular_keycloak_demo.service.LivroService;
import com.efigueredo.spring_angular_keycloak_demo.service.LivroServiceImpl;
import com.efigueredo.spring_angular_keycloak_demo.service.VerificadorLivro;
import com.efigueredo.spring_angular_keycloak_demo.service.VerificadorLivroImpl;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeansConfiguration {

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }

    @Bean
    public LivroService livroService() {
        return new LivroServiceImpl();
    }

    @Bean
    public VerificadorLivro verificadorLivro() {
        return new VerificadorLivroImpl();
    }

}
