// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
//Importar el modelo pelicula
import {Pelicula} from "../model/pelicula";
//importar servicio
import {PeliculasService} from "../services/peliculas.service";
//CONFIGURAR EL ROUTING

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl: 'app/view/peliculas-list.html',
    providers:[PeliculasService]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent { 
	public pelicula: Pelicula;
	public peliculaElegida: Pelicula;
	public mostrarDatos: boolean;
	public peliculas:Array<any>;
	//servicios
	public datoServicio;

	//Inicializar las variables de la clase.
	//Para usar un servicio hay que declarlo en el construntor
	constructor (
		private _route:ActivatedRoute,
		private _router:Router,
		private _peliculasService:PeliculasService){		
		//this.debug();
		this.mostrarDatos = false;
		this.peliculaElegida =new Pelicula(1, "Batman v Superman","Zack Snider", 2016);
		this.peliculas =this._peliculasService.getPeliculas();
		this.pelicula = this.peliculas[0];

	}
	debug(titulo=null){//Parametro opcional, si lo recibe o no
		if (titulo!= null){
			console.log(this.pelicula.titulo);
		} else{
			console.log(this.pelicula);
		}
		
	}
	onShowHide(value){
		this.mostrarDatos=value;
	}
	onCambiaPelicula(pelicula){
		this.pelicula=pelicula;
		this.peliculaElegida=pelicula;

	}
}