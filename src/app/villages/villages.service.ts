import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';
import { Village } from './village';

@Injectable({
  providedIn: 'root'
})
export class VillagesService {
  constructor(private httpClient: HttpClient) {}

  getVillages(): Observable<Village[]> {
    return this.httpClient
      .get<{ villages: Village[] }>(
        'https://dattebayo-api.onrender.com/villages'
      )
      .pipe(map((response) => response.villages));
  }

  getVillageByIndex(i: number): Observable<Village | null> {
    return this.getVillages().pipe(
      map((villages) => villages[i] ?? null),
      catchError(() => of(null))
    );
  }
}
