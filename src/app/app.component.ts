import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { SquadListComponent } from './squad-list/squad-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, PokemonListComponent, SquadListComponent],
})
export class AppComponent {
  title = 'Pokeverse';
}
