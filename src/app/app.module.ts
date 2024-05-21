import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TryInputsComponent } from './try-inputs/try-inputs.component';
import { YourHouseComponent } from './your-house/your-house.component';
import { InputParentTreeComponent } from './input-parent-tree/input-parent-tree.component';
import { InputChildLeafComponent } from './input-child-leaf/input-child-leaf.component';
import { OutputParentComponent } from './output-parent/output-parent.component';
import { OutputChildComponent } from './output-child/output-child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ChildToViewComponent } from './child-to-view/child-to-view.component';
import { RxJSFunctionsComponent } from './rx-js-functions/rx-js-functions.component';
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
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    TryInputsComponent,
    YourHouseComponent,
    InputParentTreeComponent,
    InputChildLeafComponent,
    OutputParentComponent,
    OutputChildComponent,
    ViewChildComponent,
    ChildToViewComponent,
    RxJSFunctionsComponent,
    MyselfComponent,
    ListOfCharactersComponent,
    LsitOfClansComponent,
    ListOfVillagesComponent,
    ShellComponent,
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
    MatChipsModule
  ],
  providers: [HttpClient, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
