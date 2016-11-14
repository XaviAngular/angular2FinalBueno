//Importar el núcleo de Angular
import {Component,OnInit} from '@angular/core';
import {Pelicula} from '../model/pelicula';
import {PeliculasService} from '../services/peliculas.service';
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
	selector:'peliculas-list',
	templateUrl:'app/view/peliculas-list.html',
	providers:[PeliculasService]
})
export class PeliculasListComponent{
	public pelicula:Pelicula;
	public mostrarDatos:Boolean;
	public peliculas:Array<Pelicula>;
	public peliculaElegida:Pelicula;

	//inicializar las variables
	constructor(private _peliculasService:PeliculasService){		
		this.peliculas =this._peliculasService.getPeliculas();
		this.pelicula= this.peliculas[0];
		this.peliculaElegida= this.peliculas[0];
		this.debug();
		this.mostrarDatos=false;
	}
	public onShowHide(){
		this.mostrarDatos=!this.mostrarDatos;
	}
	public onCambiaPelicula(pelicula){
		this.pelicula=pelicula;
		this.peliculaElegida=pelicula;
	}
	public debug(titulo=null){
		if (titulo!=null){
			console.log(this.pelicula.titulo);
		}else {
			console.log(this.pelicula);
		}		
	}
}