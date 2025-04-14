import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShellComponent } from './shell/shell.component';
import { ListOfCharactersComponent } from './characters/list-of-characters/list-of-characters.component';
import { LsitOfClansComponent } from './clans/lsit-of-clans/lsit-of-clans.component';
import { ListOfVillagesComponent } from './villages/list-of-villages/list-of-villages.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { ClanDetailsComponent } from './clans/clan-details/clan-details.component';
import { VillageDetailsComponent } from './villages/village-details/village-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
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
