import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { AddPlayerToTeamComponent } from './add-player-to-team/add-player-to-team.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { FindPlayerComponent } from './find-player/find-player.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    AddPlayerToTeamComponent,
    EditPlayerComponent,
    FindPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
