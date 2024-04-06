import { Component, EventEmitter, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-squad-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './squad-list.component.html',
  styleUrl: './squad-list.component.css',
})
export class SquadListComponent {
  @Input() squad: Set<Pokemon> = new Set<Pokemon>();
  @Input() addToSquad: EventEmitter<Pokemon> = new EventEmitter();

  removePokemonFromSquad(pokemon: Pokemon) {
    if (this.squad.size > 0) {
      this.squad.delete(pokemon);
    } else {
      console.log('Could not find pokemon in squad list');
    }
  }
}
