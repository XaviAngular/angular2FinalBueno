export class Pelicula{
	//se definen dentro del paréntesi porque son variables que recibirá al crear el objeto en el app.component
	constructor (
		public id: number,
		public titulo: string,
		public director: string,
		public anio:number

		){}
}