import { Component , OnInit} from '@angular/core';
import { PokemonDataService } from '../services/pokemon-data.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {

  constructor(private dataService: PokemonDataService) {

  }

  ngOnInit(): void {
    this.dataService.getPokemon()
    .subscribe((response: any) => {
      console.log(response);
    })
  }
}
