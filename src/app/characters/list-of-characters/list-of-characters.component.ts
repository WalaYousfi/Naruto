import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../character';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrl: './list-of-characters.component.css',
})
export class ListOfCharactersComponent {
  characters$: Observable<Character[]>;
  panelOpenState = false;
  constructor(private charService: CharactersService) {
    this.characters$ = charService.getCharacters();
  }
}
