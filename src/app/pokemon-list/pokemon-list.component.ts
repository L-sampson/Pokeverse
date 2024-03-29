import { Component, OnInit } from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, MatButtonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons!: number;
  constructor(private pokemonService: PokemonDataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemon(12,this.page + 0)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;

      response.results.forEach((result: any) => {
        this.pokemonService
          .getPokemonData(result.name)
          .subscribe((uniquePokemon: any) => {
            this.pokemons.push(uniquePokemon);
            console.log(this.pokemons);
          });
      });
    });
  }
}
