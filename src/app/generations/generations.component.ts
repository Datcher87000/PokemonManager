import { Component } from '@angular/core';
import { ListePokemonService } from '../service/liste-pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generations',
  imports: [],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.css'
})
export class GenerationsComponent {
generations:any=[]

constructor(private pokeSrv:ListePokemonService, private router: Router){

  this.pokeSrv.getGenerations().subscribe({
  next:(data:any)=>{
    this.generations=data.results
  }
})

 
}

navigate(){
    this.router.navigate(['/pokemons']);
  }


}
