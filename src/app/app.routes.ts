import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { GenerationsComponent } from './generations/generations.component';

export const routes: Routes = [

{path: 'pokemons',component: PokemonsComponent},

{path: '',component: GenerationsComponent}
];
