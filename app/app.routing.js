"use strict";
var router_1 = require("@angular/router");
var peliculas_list_component_1 = require("./components/peliculas-list.component");
var contacto_1 = require("./components/contacto");
var crear_pelicula_component_1 = require("./components/crear-pelicula.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: "", component: peliculas_list_component_1.PeliculasListComponent },
    { path: "contacto", component: contacto_1.ContactoComponent },
    { path: "crear-pelicula", component: crear_pelicula_component_1.CrearPeliculaComponent },
    { path: "crear-pelicula/:titulo/:director/:anio", component: crear_pelicula_component_1.CrearPeliculaComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map