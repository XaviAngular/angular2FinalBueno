//Importar el núcleo de Angular
import {Component} from '@angular/core';
export class Pelicula{
	constructor(
			public id:number,
			public titulo:string,
			public director:string,
			public anio:number
		){}
}