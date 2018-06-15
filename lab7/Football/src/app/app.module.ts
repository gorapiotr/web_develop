import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { PlayerComponent } from './component/player/player.component';
import { TeamComponent } from './component/team/team.component';
import { AddPlayerToTeamComponent } from './component/add-player-to-team/add-player-to-team.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { FindPlayerComponent } from './component/find-player/find-player.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RemovePlayerComponent } from './component/remove-player/remove-player.component';
import { TeamService } from './service/team.service';
import { LeagueTableComponent } from './component/league-table/league-table.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    AddPlayerToTeamComponent,
    EditPlayerComponent,
    FindPlayerComponent,
    RemovePlayerComponent,
    LeagueTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [TeamService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
