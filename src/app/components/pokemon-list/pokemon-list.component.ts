import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { PokemonDataService } from '../../services/pokemon-data.service';
import { SquadListComponent } from '../squad-list/squad-list.component';
import { Pokemon } from '../../interfaces/pokemon';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatButtonModule,
    SquadListComponent,
    HeaderComponent,
  ],
})
export class PokemonListComponent implements OnInit {
  @Output() addToSquad: EventEmitter<Pokemon> = new EventEmitter();
  pokemons: any[] = [];
  squad = new Set<Pokemon>();
  page = 1;
  totalPokemons!: number;
  isBattleButtonReady = false;
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

  addPokemonToSquad(pokemon: Pokemon) {
    if (this.squad.size < 6 && !this.squad.has(pokemon)) {
      this.squad.add(pokemon);
      // alert(`Added Pokemon to Squad: ${pokemon.name}, you have ${6-this.squad.size} remaining spots avaiable.`);
      this.addToSquad.emit(pokemon);
    } else if (this.squad.has(pokemon)) {
      alert(
        `Please choose another pokemon. ${pokemon.name} is already on your squad.`
      );
    }
    if (this.squad.size > 5) {
      this.isBattleButtonReady = true;
      alert('No remaining spots available');
    }
  }
}
