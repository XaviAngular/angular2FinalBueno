// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: 'app/view/peliculas.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
	public tituloApp:string;
	//inicializar las variables
	constructor(){
		this.tituloApp="Peliculas con Angular 2";		
	}		
 }