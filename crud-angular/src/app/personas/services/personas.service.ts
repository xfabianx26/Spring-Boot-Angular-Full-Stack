import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url = environment.personas +'/api/personas'
  constructor(private httpClient: HttpClient) { }



  obtenerPersonas(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.url}`)
  }


  crearPersona(persona: Persona): Observable<Object>{
    return this.httpClient.post(`${this.url}`, persona)
  }

  obtenerPersonaPorId(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.url}/${id}`)
  }

  actualizarPersona(id: number, persona: Persona): Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`, persona)
  }

  eliminarPersona(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`)
  }

}
