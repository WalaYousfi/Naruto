import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyselfComponent } from './myself/myself.component';
import { ShellComponent } from './shell/shell.component';
import { ListOfCharactersComponent } from './showCharacters/list-of-characters/list-of-characters.component';
import { LsitOfClansComponent } from './showClans/lsit-of-clans/lsit-of-clans.component';
import { ListOfVillagesComponent } from './showVillages/list-of-villages/list-of-villages.component';
import { CharacterDetailsComponent } from './showCharacters/character-details/character-details.component';
import { ClanDetailsComponent } from './showClans/clan-details/clan-details.component';
import { VillageDetailsComponent } from './showVillages/village-details/village-details.component';

const routes: Routes = [
  { path: '', component: MyselfComponent },
  {
    path: 'characters',
    component: ListOfCharactersComponent,
  },
  {
    path: 'clans',
    component: LsitOfClansComponent,
  },
  { path: 'villages', component: ListOfVillagesComponent },

  { path: 'characterDetail/:index', component: CharacterDetailsComponent },
  { path: 'clanDetail/:index', component: ClanDetailsComponent },
  { path: 'villageDetail/:index', component: VillageDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
