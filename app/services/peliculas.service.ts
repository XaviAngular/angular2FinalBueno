import {Injectable} from "@angular/core";
import {PELICULAS} from "./mok.peliculas";
import {Pelicula} from '../model/pelicula';

@Injectable()

export class PeliculasService{
	getPeliculas(){
		return PELICULAS;
	}
	insertPelicula(pelicula:Pelicula){
		Promise.resolve(PELICULAS).then((peliculas:Pelicula[]) => peliculas.push(pelicula));
	}
}

