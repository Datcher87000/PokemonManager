import { Component } from '@angular/core';
import { ListePokemonService } from '../service/liste-pokemon.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemons',
  imports: [TitleCasePipe],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.css',
  
})
export class PokemonsComponent {
  tabPokemons:any =[];
  idPokemon:any=''
  heightPokemon:string=''
  weightPokemon:string=''

  constructor(private listPokemon:ListePokemonService){

    this.listPokemon.getPokemons().subscribe({
      next:(data:any)=>{
         for (let poke of data.pokemon_entries) {
       
          if (poke.pokemon_species) {
            let url = poke.pokemon_species.url;
            this.listPokemon.getFrTrad(url).subscribe({
              next:(data:any)=>{
                this.listPokemon.getDetailPokemon(poke.entry_number).subscribe({
                  next:(details:any)=>{
                    let pokemon={
                      poids: details.weight,
                      taille: details.height,
                      img:details.sprites.front_default,
                      imgShiny:details.sprites.front_shiny,
                      id: poke.entry_number,
                      name: data.names[4].name,
                      description:data.flavor_text_entries[16].flavor_text
                    }
                    this.tabPokemons.push(pokemon);
                  }
                })
              }
            });
            

          }
        }  
       }
    })
      setTimeout(() => {
      this.tabPokemons.sort((a: any, b: any) => a.id - b.id);
    }, 3000);
  
  }
  
}
