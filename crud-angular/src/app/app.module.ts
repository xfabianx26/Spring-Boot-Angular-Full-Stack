import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListPersonasComponent } from './personas/pages/list-persona/list-personas.component';
import { CreatePersonasComponent } from './personas/pages/create-persona/create-personas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdatePersonComponent } from './personas/pages/update-persona/actualizar.component';
import { DetallesComponent } from './personas/pages/detalles/detalles.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonasComponent,
    CreatePersonasComponent,
    UpdatePersonComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
