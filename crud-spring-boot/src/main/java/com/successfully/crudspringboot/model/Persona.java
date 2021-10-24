package com.successfully.crudspringboot.model;



import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name =  "personas")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    @Column(name = "nombre")
    private String nombre;
    @Column(name = "apellido")
    private  String apellido;
    @Column(name = "email")
    private  String email;
    private  String telefono;
}
