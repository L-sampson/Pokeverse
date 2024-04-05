import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { PokemonDataService } from '../../services/pokemon-data.service';
import { SquadListComponent } from '../squad-list/squad-list.component';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, MatButtonModule, SquadListComponent],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  @Output() addToSquad: EventEmitter<Pokemon> = new EventEmitter;
  pokemons: any[] = [];
  squad: Pokemon[] = [];
  page = 1;
  totalPokemons!: number;
  constructor(private pokemonService: PokemonDataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
      .getPokemon(12, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((result: any) => {
          this.pokemonService
            .getPokemonData(result.name)
            .subscribe((uniquePokemon: any) => {
              this.pokemons.push(uniquePokemon);
            });
        });
      });
  }

  addPokemonToSquad(pokemon:Pokemon) {
    if(this.squad.length < 6) {
      this.squad.push(pokemon);
      console.log("Added Pokemon to Squad: ", pokemon.name);
      console.log(this.squad.length);
    } else {
      console.log("Error, squad list cannot exceed 6 pokemon");
    }
  }
}
