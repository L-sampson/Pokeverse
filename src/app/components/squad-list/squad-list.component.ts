import {
  Component,
  EventEmitter,
  Input,
  OnInit,
} from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-squad-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './squad-list.component.html',
  styleUrl: './squad-list.component.css',
})
export class SquadListComponent implements OnInit {
  @Input() squad: Pokemon[] = [];
  @Input() addToSquad: EventEmitter<Pokemon> = new EventEmitter();


  ngOnInit() {
    this.addToSquad.subscribe((pokemon: Pokemon) => {
      console.log("Pokemon added:", pokemon.name);
    });
  }
  }
