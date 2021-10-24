import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Persona } from '../../interfaces/Persona';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class UpdatePersonComponent implements OnInit {

  id: number;
  persona: Persona = new Persona();
  constructor(private personaService: PersonasService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  this.cargarPersonaLista()
  }





  onSubmit(){
    this.personaService.actualizarPersona(this.id, this.persona).subscribe(

      data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${this.persona.nombre} ${this.persona.apellido}`,
          text: 'Persona actualizada',
          showConfirmButton: false,
          timer: 1500
        })
        this.listaPersona();
      },
      error => {
        console.log(error);
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: `Error al actualizar ${this.persona.nombre}`,
          showConfirmButton: false,
          timer: 1500
        })
      }

    )
  }

  /* redireccionar */
listaPersona(){
  this.router.navigate(['/persona']);

}

/* cargar los datos al actualizar */
cargarPersonaLista(){
  this.id = this.route.snapshot.params['id'];
  this.personaService.obtenerPersonaPorId(this.id).subscribe(
    data => {
      this.persona = data
    },
    error => {
      console.log(error);
    }
  )
}

}
