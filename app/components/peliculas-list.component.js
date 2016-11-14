"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar el núcleo de Angular
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Importar el modelo pelicula
var pelicula_1 = require("../model/pelicula");
//importar servicio
var peliculas_service_1 = require("../services/peliculas.service");
//CONFIGURAR EL ROUTING
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var PeliculasListComponent = (function () {
    //Inicializar las variables de la clase.
    //Para usar un servicio hay que declarlo en el construntor
    function PeliculasListComponent(_route, _router, _peliculasService) {
        this._route = _route;
        this._router = _router;
        this._peliculasService = _peliculasService;
        //this.debug();
        this.mostrarDatos = false;
        this.peliculaElegida = new pelicula_1.Pelicula(1, "Batman v Superman", "Zack Snider", 2016);
        this.peliculas = this._peliculasService.getPeliculas();
        this.pelicula = this.peliculas[0];
    }
    PeliculasListComponent.prototype.debug = function (titulo) {
        if (titulo === void 0) { titulo = null; }
        if (titulo != null) {
            console.log(this.pelicula.titulo);
        }
        else {
            console.log(this.pelicula);
        }
    };
    PeliculasListComponent.prototype.onShowHide = function (value) {
        this.mostrarDatos = value;
    };
    PeliculasListComponent.prototype.onCambiaPelicula = function (pelicula) {
        this.pelicula = pelicula;
        this.peliculaElegida = pelicula;
    };
    PeliculasListComponent = __decorate([
        core_1.Component({
            selector: 'peliculas-list',
            templateUrl: 'app/view/peliculas-list.html',
            providers: [peliculas_service_1.PeliculasService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, peliculas_service_1.PeliculasService])
    ], PeliculasListComponent);
    return PeliculasListComponent;
}());
exports.PeliculasListComponent = PeliculasListComponent;
//# sourceMappingURL=peliculas-list.component.js.map