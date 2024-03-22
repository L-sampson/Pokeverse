import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonDataService {

  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12';

  constructor(private http: HttpClient) {}

    // CRUD Routes

   // Get Pokemon
   getPokemon() {
    return this.http.get(this.pokemonUrl);
   }

   // Get Pokemon Data
   getPokemonData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
   }
}
