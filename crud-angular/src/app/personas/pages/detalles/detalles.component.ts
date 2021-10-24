import { Component, OnInit } from '@angular/core';
import { Persona } from '../../interfaces/Persona';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  id: number;
  persona: Persona;
  constructor(private route: ActivatedRoute,
    private personaService: PersonasService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarDetalles()

  }


  listarDetalles(){
    this.id = this.route.snapshot.params['id'];
    this.persona = new Persona();
    this.personaService.obtenerPersonaPorId(this.id).subscribe(
      data => {
        this.persona = data
      },
      error => {
        console.log(error);
      }

    )
  }

  regresar(){
    this.router.navigate(['persona'])
  }
}
