import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon } from '../../Interfaces/pokemon.interface';
import { NgFor, NgStyle } from '@angular/common';


@Component({
  selector: 'app-catch',
  imports: [NgFor, NgStyle],
  templateUrl: './catch.component.html',
  styleUrl: './catch.component.css'
})
export class CatchComponent {

  constructor(private pokemonService:PokemonService){
  }

  //These 4 pokemon will get rendered randomly on the screen
  //When clicked, the user can catch them
  pokeArray:Pokemon[] = []

  //Get 4 pokemon when the component renders
  ngOnInit(){
    this.getPokemon()
  }

  //Clear the Array if it's not empty, then get 4 random Pokemon from the service
  //We call getRandomPokemon from the pokemonService, and SUBSCRIBE to the observable
  //Once we subscribe, we can push the extracted pokemon into the Array
  getPokemon(){

    if(this.pokeArray.length !== 0){
      this.pokeArray.length = 0
    }

    for(let i:number = 0; i < 4; i++){
      this.pokemonService.getRandomPokemon().subscribe(pokemon => {
        this.pokeArray.push(pokemon);  
      });
    }
  }

   //Generate 4 random positional styles for the pokemon sprites (thanks chatGPT)
   getRandomPosition() {
    const randomTop = Math.floor(Math.random() * 50) + '%'; // Random top position within 50% of screen height
    const randomLeft = Math.floor(Math.random() * 50) + '%'; // Random left position within 50% of screen width

    return {
      position: 'absolute',
      top: randomTop,
      left: randomLeft
    };
  }

  //Catch a pokemon (push the clicked pokemon into the array in PokemonService)
  catchPokemon(pokemon:Pokemon){
    this.pokemonService.caughtPokemon.push(pokemon)
    alert("caught " + pokemon.name + "!")

    //remove the caught pokemon from the array
    this.pokeArray.splice(this.pokeArray.indexOf(pokemon), 1); //1? this means delete one element from the found index

    //add to counter in PokemonService
    this.pokemonService.numCaught++
  }

}
