package com.successfully.crudspringboot.controller;


import com.successfully.crudspringboot.model.Persona;
import com.successfully.crudspringboot.repository.IPersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class PersonaController {

    @Autowired
    private IPersonaRepository iPersonaRepository;


    @GetMapping("/personas")
    public List<Persona> obtenerPersonas(){
        return iPersonaRepository.findAll();
    }

    /*crear personas*/
    @PostMapping("/personas")
    public Persona crearPersona(@RequestBody Persona persona){
        return iPersonaRepository.save(persona);
    }
}
