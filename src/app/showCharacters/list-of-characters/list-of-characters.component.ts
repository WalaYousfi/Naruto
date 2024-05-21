import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Character } from '../character';

@Component({
  selector: 'app-list-of-characters',
  templateUrl: './list-of-characters.component.html',
  styleUrl: './list-of-characters.component.css',
})
export class ListOfCharactersComponent {
  characters$: Observable<Character[]>;
  panelOpenState = false;
  constructor(private httpClient: HttpClient) {
    this.characters$ = this.getCharacter();
  }

  getCharacter(): Observable<any[]> {
    return this.httpClient
      .get<{ characters: Character[] }>(
        'https://dattebayo-api.onrender.com/characters'
      )
      .pipe(map((Response) => Response.characters));
  }
}
