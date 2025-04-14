import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Clan } from '../clan';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lsit-of-clans',
  templateUrl: './lsit-of-clans.component.html',
  styleUrl: './lsit-of-clans.component.css',
})
export class LsitOfClansComponent {
  clans$: Observable<Clan[]>;
  panelOpenState = false;

  constructor(private httpClient: HttpClient) {
    this.clans$ = this.getClans();
  }

  getClans(): Observable<Clan[]> {
    return this.httpClient
      .get<{ clans: Clan[] }>('https://dattebayo-api.onrender.com/clans')
      .pipe(map((Response) => Response.clans));
  }
}
