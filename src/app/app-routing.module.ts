import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewChildComponent } from './view-child/view-child.component';
import { MyselfComponent } from './myself/myself.component';
import { ShellComponent } from './shell/shell.component';
import { ListOfCharactersComponent } from './showCharacters/list-of-characters/list-of-characters.component';
import { LsitOfClansComponent } from './showClans/lsit-of-clans/lsit-of-clans.component';
import { ListOfVillagesComponent } from './showVillages/list-of-villages/list-of-villages.component';

const routes: Routes = [
  { path: '', component: ShellComponent },
  { path: 'first', component: MyselfComponent },
  {
    path: 'characters',
    component: ListOfCharactersComponent,
  },
  {
    path: 'clans',
    component: LsitOfClansComponent,
  },
  { path: 'villages', component: ListOfVillagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
