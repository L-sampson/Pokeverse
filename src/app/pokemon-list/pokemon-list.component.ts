import { Component , OnInit} from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor(private dataService: PokemonDataService) {
  }

  ngOnInit(): void {
    this.dataService.getPokemon()
    .subscribe((response: any) => {
      response.results.forEach((result: any) => {
        this.dataService.getPokemonData(result.name)
          .subscribe((uniquePokemon: any) =>{
            this.pokemons.push(uniquePokemon);
            console.log(this.pokemons);
          })
      })
    })
  }
}
