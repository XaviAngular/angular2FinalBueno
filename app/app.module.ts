import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';

import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";

import {routing,appRoutingProviders} from "./app.routing"
 
@NgModule({
  imports:      [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,
  					PeliculasListComponent,
  					PeliculasFooterComponent,
  					ContactoComponent,
					CrearPeliculaComponent
				 ],
 providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }