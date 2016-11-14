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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var peliculas_service_1 = require('../services/peliculas.service');
var pelicula_1 = require("../model/pelicula");
var CrearPeliculaComponent = (function () {
    function CrearPeliculaComponent(_peliculasService, _router, _route) {
        this._peliculasService = _peliculasService;
        this._router = _router;
        this._route = _route;
        this.TituloPelicula = "";
        this.tituloCrear = "Crear nueva película";
    }
    CrearPeliculaComponent.prototype.onSubmit = function () {
        this._peliculasService.insertPelicula(this.nuevaPelicula);
        this._router.navigate([""]);
    };
    CrearPeliculaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this.TituloPelicula = params["titulo"];
            _this.nuevaPelicula = new pelicula_1.Pelicula(0, params["titulo"], params["director"], parseInt(params["anio"]));
        });
    };
    CrearPeliculaComponent = __decorate([
        core_1.Component({
            selector: 'crear-pelicula',
            templateUrl: 'app/view/crear-pelicula.html',
            providers: [peliculas_service_1.PeliculasService]
        }), 
        __metadata('design:paramtypes', [peliculas_service_1.PeliculasService, router_1.Router, router_1.ActivatedRoute])
    ], CrearPeliculaComponent);
    return CrearPeliculaComponent;
}());
exports.CrearPeliculaComponent = CrearPeliculaComponent;
//# sourceMappingURL=crear-pelicula.component.js.map