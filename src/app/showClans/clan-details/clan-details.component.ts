import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Clan } from '../clan';
import { ClansService } from '../clans.service';

@Component({
  selector: 'app-clan-details',
  templateUrl: './clan-details.component.html',
  styleUrl: './clan-details.component.css'
})
export class ClanDetailsComponent {
  clan$: Observable<Clan>;

  constructor(
    private clanService: ClansService,
    private route: ActivatedRoute
  ) {
    const i = Number(route.snapshot.paramMap.get('index'));
    this.clan$ = clanService.getClanByIndex(i);
  }
}
