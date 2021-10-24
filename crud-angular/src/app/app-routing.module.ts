import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonasComponent } from './personas/pages/create-persona/create-personas.component';
import { DetallesComponent } from './personas/pages/detalles/detalles.component';
import { ListPersonasComponent } from './personas/pages/list-persona/list-personas.component';
import { UpdatePersonComponent } from './personas/pages/update-persona/actualizar.component';

const routes: Routes = [
  /*  { path: '', component: ListPersonasComponent, pathMatch: 'full' },*/
  { path: 'persona', component: ListPersonasComponent },
  { path: '', redirectTo: '/persona', pathMatch: 'full' },
  { path: 'crear-persona', component: CreatePersonasComponent },
  { path: 'actualizar-persona/:id', component: UpdatePersonComponent },
  { path: 'detalles-persona/:id', component: DetallesComponent },

  { path: '**', redirectTo: 'persona' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
