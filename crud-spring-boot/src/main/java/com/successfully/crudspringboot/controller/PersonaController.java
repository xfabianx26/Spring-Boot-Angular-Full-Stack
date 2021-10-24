package com.successfully.crudspringboot.controller;


import com.successfully.crudspringboot.exception.ResourceNotFoundException;
import com.successfully.crudspringboot.model.Persona;
import com.successfully.crudspringboot.repository.IPersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/")
public class PersonaController {

    @Autowired
    private IPersonaRepository iPersonaRepository;

    /*obtener todas las personas*/
    @GetMapping("/personas")
    public List<Persona> obtenerPersonas(){
        return iPersonaRepository.findAll();
    }

    /*crear personas*/
    @PostMapping("/personas")
    public Persona crearPersona(@RequestBody Persona persona){
        return iPersonaRepository.save(persona);
    }


    /*obtener persona por id rest api*/
    @GetMapping("/personas/{id}")
    public ResponseEntity<Persona>  obtenerPorId(@PathVariable Long id){
        Persona persona =  iPersonaRepository.findById(id)
                .orElseThrow(() -> new
                        ResourceNotFoundException("Persona no existe con id: "+id));

        return ResponseEntity.ok(persona);
    }

    /*actulizar personas rest api*/
    @PutMapping("/personas/{id}")
    public  ResponseEntity<Persona> actualizarPersona(@PathVariable Long id, @RequestBody Persona detallePersona){

        Persona persona =  iPersonaRepository.findById(id)
                .orElseThrow(() -> new
                        ResourceNotFoundException("Persona no existe con id: "+id));

        persona.setNombre(detallePersona.getNombre());
        persona.setApellido(detallePersona.getApellido());
        persona.setEmail(detallePersona.getEmail());
        persona.setTelefono(detallePersona.getTelefono());

        Persona actualizarPersona =  iPersonaRepository.save(persona);
        return  ResponseEntity.ok(actualizarPersona);
    }

    /* eliminar */
    @DeleteMapping("/personas/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarPersona(@PathVariable Long id)
    {
        Persona persona =  iPersonaRepository.findById(id)
                .orElseThrow(() -> new
                        ResourceNotFoundException("Persona no existe con id: "+id));

        iPersonaRepository.delete(persona);
        Map<String, Boolean>  respuesta = new HashMap<>();
        respuesta.put("Eliminado", Boolean.TRUE);
        return  ResponseEntity.ok(respuesta);
    }
}
