import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.httpClient
      .get<{ characters: Character[] }>(
        'https://dattebayo-api.onrender.com/characters'
      )
      .pipe(map((response) => response.characters));
  }

  getCharacterByIndex(index: number): Observable<Character> {
    return this.getCharacters().pipe(map((characters) => characters[index]));
  }
}
