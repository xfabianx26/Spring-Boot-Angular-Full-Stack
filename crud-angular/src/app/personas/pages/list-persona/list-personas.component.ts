import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/Persona';
import { PersonasService } from '../../services/personas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

/* icon */
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css']
})
export class ListPersonasComponent implements OnInit {

  /* Iconos */
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  faEye = faEye

  personas: Persona[] = [];
  persona: Persona = new Persona();
  constructor(private personaService: PersonasService,
    private router: Router ) { }

  ngOnInit(): void {
    this.obtenerPersona();

  }


  private obtenerPersona(){
    this.personaService.obtenerPersonas().subscribe(

      data => {
        this.personas = data
      },
      err => {
        console.log(err);
      }
    )
  }

  detallePersona(id: number){
    this.router.navigate(['detalles-persona', id])
  }


  updatePersona(id: number){
    this.router.navigate(['actualizar-persona', id])
  }

  deletePersona(id: number){
    this.personaService.eliminarPersona(id).subscribe(
      data => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.persona.nombre,
          text: 'Persona registrada con exito!!',
          showConfirmButton: false,
          timer: 1500
        })
        this.obtenerPersona()

      },error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: `Ocurrio un error al eliminar a ${this.persona.nombre}`,
          showConfirmButton: false,
          timer: 1500
        })
      }


    )
  }
}
