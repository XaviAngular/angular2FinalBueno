"use strict";
var Pelicula = (function () {
    //se definen dentro del paréntesi porque son variables que recibirá al crear el objeto en el app.component
    function Pelicula(id, titulo, director, anio) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
    }
    return Pelicula;
}());
exports.Pelicula = Pelicula;
//# sourceMappingURL=pelicula.js.map