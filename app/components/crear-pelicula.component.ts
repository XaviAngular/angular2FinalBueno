// Importar el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Pelicula} from "../model/pelicula";
//importar servicios
import {PeliculasService} from "../services/peliculas.service";


// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'crear-pelicula',
    templateUrl: 'app/view/crear-pelicula.html',
    providers: [PeliculasService]    
})

// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit { 
	public TituloPelicula:string="";
	public nuevaPelicula:Pelicula;

	constructor(private _peliculasService: PeliculasService, 		
		private _route:ActivatedRoute,
		private _router:Router,
		){
	
	}
	onSubmit(){
		
		this._peliculasService.insertPelicula(this.nuevaPelicula);
		this._router.navigate([""]);
	}
	ngOnInit():any{
		this._route.params.forEach((params: Params) =>{
			this.TituloPelicula=params["titulo"];
		this.nuevaPelicula = new Pelicula(
			0,
			params["titulo"],
			params["director"],
			parseInt(params["anio"]),
			);
		} );
		
	}	
}