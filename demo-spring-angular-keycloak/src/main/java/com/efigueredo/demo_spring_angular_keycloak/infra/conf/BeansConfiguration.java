package com.efigueredo.demo_spring_angular_keycloak.infra.conf;

import com.efigueredo.demo_spring_angular_keycloak.service.LivroService;
import com.efigueredo.demo_spring_angular_keycloak.service.LivroServiceImpl;
import com.efigueredo.demo_spring_angular_keycloak.service.VerificadorLivro;
import com.efigueredo.demo_spring_angular_keycloak.service.VerificadorLivroImpl;
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
