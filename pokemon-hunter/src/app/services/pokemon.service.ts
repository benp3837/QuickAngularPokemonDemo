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

  //Constructor Inject HttpClient so we can make HTTP requests
  constructor(private http: HttpClient) {}

  //Method to fetch one random Pokémon
  getRandomPokemon(): Observable<Pokemon> {
    const randomId = Math.floor(Math.random() * 1025) + 1; //PokeAPI has 1025 Pokémon
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`; //the URL of our GET request

    /*send HTTP GET request to pokeAPI, and convert the data into a Pokemon object
    
    -pipe() allows us to chain operations to process the data in the HTTP response
    -map() is one such operation that lets us transform the data
      -In this case we're taking the data and converting it into a Pokemon object
      -This is what the CatchComponent will subscribe to in order to show pokemon!*/
    return this.http.get<any>(url).pipe(
      map(response => ({
        name: response.name,
        sprite: response.sprites.front_default
      }))
    );
  

  }
}
