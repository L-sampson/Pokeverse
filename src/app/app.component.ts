import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, PokemonListComponent, HttpClientModule]
})
export class AppComponent {
  title = 'Pokeverse';
}
