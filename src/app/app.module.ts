import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MyselfComponent } from './myself/myself.component';
import { ListOfCharactersComponent } from './showCharacters/list-of-characters/list-of-characters.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule } from '@angular/material/expansion';
import { LsitOfClansComponent } from './showClans/lsit-of-clans/lsit-of-clans.component';
import { ListOfVillagesComponent } from './showVillages/list-of-villages/list-of-villages.component';
import { ShellComponent } from './shell/shell.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { CharacterDetailsComponent } from './showCharacters/character-details/character-details.component';
import { ClanDetailsComponent } from './showClans/clan-details/clan-details.component';
import { VillageDetailsComponent } from './showVillages/village-details/village-details.component';
@NgModule({
  declarations: [
    AppComponent,
    MyselfComponent,
    ListOfCharactersComponent,
    LsitOfClansComponent,
    ListOfVillagesComponent,
    ShellComponent,
    CharacterDetailsComponent,
    ClanDetailsComponent,
    VillageDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule
  ],
  providers: [HttpClient, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
