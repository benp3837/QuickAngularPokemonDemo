import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../Interfaces/pokemon.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //Array to hold our list of caught Pokémon
  public caughtPokemon: Pokemon[] = [];

  //Counter to track number of pokemon caught
  public numCaught:number = 0;

  constructor(private http: HttpClient) {}

  // Method to fetch one random Pokémon and add it to the array
  getRandomPokemon(): Observable<Pokemon> {
    const randomId = Math.floor(Math.random() * 1025) + 1; // PokeAPI has 898 Pokémon
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

    return this.http.get<any>(url).pipe(map(response => {
      const pokemon: Pokemon = {
        name: response.name,
        sprite: response.sprites.front_default
      };
      return pokemon;
    }));
  }
}
