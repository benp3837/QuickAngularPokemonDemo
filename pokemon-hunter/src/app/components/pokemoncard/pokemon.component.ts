import { Component, Input } from '@angular/core';
import { Pokemon } from '../../Interfaces/pokemon.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [TitleCasePipe],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  @Input() pokemon!: Pokemon;
  //@Input() onClose!: () => void;  //callback for deleting

}
