import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";

const appRoutes: Routes=[
{
	path:'',
	redirectTo:'/',
	pathMatch:'full'
},
{path: "",  component: PeliculasListComponent},
{path: "contacto", component: ContactoComponent},
{path: "crear-pelicula", component: CrearPeliculaComponent},
{path: "crear-pelicula/:titulo/:director/:anio",  component: CrearPeliculaComponent}
];

export const appRoutingProviders:any[]=[];
export const routing: ModuleWithProviders= RouterModule.forRoot(appRoutes);