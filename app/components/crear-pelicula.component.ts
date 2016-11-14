import {Component,OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {PeliculasService} from '../services/peliculas.service';
import {Pelicula} from "../model/pelicula";

@Component({
	selector:'crear-pelicula',
	templateUrl: 'app/view/crear-pelicula.html',
	providers: [PeliculasService]
})


export class CrearPeliculaComponent implements OnInit {
	public TituloPelicula:string="";
	public nuevaPelicula:Pelicula;
	constructor (
				private _peliculasService: PeliculasService, 
				private _router:Router,
				private _route: ActivatedRoute)
	{	}
	public tituloCrear:string="Crear nueva película";

	public onSubmit(){
		this._peliculasService.insertPelicula(this.nuevaPelicula);
		this._router.navigate([""]);
	}
	public ngOnInit():any{
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