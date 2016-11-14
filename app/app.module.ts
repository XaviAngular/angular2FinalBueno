import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {FormsModule} 	 from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';

import {PeliculasListComponent} from './components/peliculas-list.component';
import {PeliculasFooterComponent} from './components/peliculas-footer.component';
import {PeliculasContactoComponent} from './components/peliculas-contacto.component';
import {CrearPeliculaComponent} from './components/crear-pelicula.component';

 
@NgModule({
  imports:      [  BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent,
  					PeliculasListComponent,
  					PeliculasFooterComponent,
  					PeliculasContactoComponent,
  					CrearPeliculaComponent],
  	providers: [appRoutingProviders],				
  bootstrap:    [ AppComponent ]
})
 
export class AppModule { }