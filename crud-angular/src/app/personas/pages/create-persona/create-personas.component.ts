import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../../interfaces/Persona';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-create-personas',
  templateUrl: './create-personas.component.html',
  styleUrls: ['./create-personas.component.css']
})
export class CreatePersonasComponent implements OnInit {

  persona: Persona = new Persona();
  constructor(private personaService: PersonasService,
    private router: Router) { }

  ngOnInit(): void {
  }

  guardarPersona(){
    this.personaService.crearPersona(this.persona).subscribe(
      data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.persona.nombre,
          text: 'Persona registrada con exito!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.listaPersona()
      },
      err => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: `Error al agregar ${this.persona.nombre}`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
  listaPersona(){
        this.router.navigate(['/persona']);

  }

  onSubmit(){
    this.guardarPersona()

    // console.log(this.persona); mostramos los datos por consola
  }

}
