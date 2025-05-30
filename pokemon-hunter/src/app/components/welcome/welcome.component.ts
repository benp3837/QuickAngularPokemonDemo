import { Component } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule, NgFor } from '@angular/common';
import { PokemonComponent } from '../pokemoncard/pokemon.component';

@Component({
  selector: 'app-welcome',
  imports: [NgFor, CommonModule, PokemonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  ngOnInit(){
    console.log(this.pokemonService.caughtPokemon)
  }

  //Need the PokemonService to access the Array of Caught Pokemon in the HTML
  constructor(public pokemonService:PokemonService){}

}
