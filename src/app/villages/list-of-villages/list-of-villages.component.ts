import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Village } from '../village';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-of-villages',
  templateUrl: './list-of-villages.component.html',
  styleUrl: './list-of-villages.component.css',
})
export class ListOfVillagesComponent {
  villages$: Observable<Village[]>;
  panelOpenState = false;

  constructor(private httpClient: HttpClient) {
    this.villages$ = this.getVillages();
  }

  getVillages(): Observable<Village[]> {
    return this.httpClient
      .get<{ villages: Village[] }>(
        'https://dattebayo-api.onrender.com/villages'
      )
      .pipe(map((Response) => Response.villages));
  }
}
