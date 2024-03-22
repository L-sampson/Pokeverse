import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // CRUD Routes

  // Get Pokemon
  getPokemon(limit: number, offset: number) {
    return this.http.get(this.pokemonUrl+`?limit=${limit}&offset=${offset}`);
  }

  // Get Pokemon Data
  getPokemonData(name: string) {
    return this.http.get(this.pokemonUrl+`/${name}`);
  }
}
