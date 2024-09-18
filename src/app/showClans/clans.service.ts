import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Clan } from './clan';

@Injectable({
  providedIn: 'root'
})
export class ClansService {

  constructor(private httpClient: HttpClient) {}

  getClans(): Observable<Clan[]> {
    return this.httpClient
      .get<{ clans: Clan[] }>('https://dattebayo-api.onrender.com/clans')
      .pipe(map((Response) => Response.clans));
  }

  getClanByIndex(i: number) {
    return this.getClans().pipe(map((villages) => villages[i]));
  }
}
