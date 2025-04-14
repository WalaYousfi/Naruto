import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../character';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  character: Observable<Character>;

  constructor(
    private route: ActivatedRoute,
    private charService: CharactersService
  ) {}

  ngOnInit(): void {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    this.character = this.charService.getCharacterByIndex(index);
  }
}
