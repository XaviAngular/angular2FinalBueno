import {Injectable} from "@angular/core";
import {Pelicula} from "../model/pelicula";
import {PELICULAS} from "./mock.peliculas";

//Decorador
@Injectable()

export class PeliculasService{
	getPeliculas(){
		return PELICULAS;
	}
	insertPelicula(pelicula: Pelicula){
		Promise.resolve(PELICULAS).then((peliculas:Pelicula[]) => peliculas.push(pelicula));
	}
}