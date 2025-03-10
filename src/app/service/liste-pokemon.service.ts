import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListePokemonService {
constructor(private http: HttpClient) { }


  getGenerations(){
    return this.http.get(environment.apiPokemonGen);
  }

  getPokemons(){
    return this.http.get(environment.apiPokemon)
  }

  getDetailPokemon(id:string){
    return this.http.get(environment.apiDetailPokemon+id) 
  }
  
  getFrTrad(url:string){
    return this.http.get(url)
  }
  
}
