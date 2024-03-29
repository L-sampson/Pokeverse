import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-squad-list',
  standalone: true,
  imports: [],
  templateUrl: './squad-list.component.html',
  styleUrl: './squad-list.component.css'
})
export class SquadListComponent {
  squad: Pokemon[] = [];

}
