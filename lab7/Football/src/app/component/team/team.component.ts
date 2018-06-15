import { Component, OnInit } from '@angular/core';
import { Liverpool } from '../../model/Liverpool';
import { FootballPlayer } from '../../model/FootballPlayer';
import { GoalKeeper } from '../../model/GoalKeeper';
import { TeamService} from '../../service/team.service';
import { FootballTeam } from '../../model/FootballTeam';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  //team = Liverpool;
  team: FootballTeam;
  selectedPlayer: FootballPlayer;
  
  selectedPlayerIndex: number;

  constructor( private teamService: TeamService) {
   }

  ngOnInit() {
    this.getTeam();
  }

  getTeam():void {
   this.teamService.getTeam().subscribe(team => this.team = team);
  }
 

  addPlayer(player: FootballPlayer){
    this.team.players.push(player);
  }
  
  selectPlayer(index: number){
    this.selectedPlayer = this.team.players[index];
    this.selectedPlayerIndex = index;
    console.log(this.selectedPlayer);
  }

  setRemovePlayerIndex(index: number){
    this.selectedPlayerIndex = index;
  }

  test(editedPlayer: FootballPlayer){

    this.team.players[this.selectedPlayerIndex].playerName = editedPlayer.playerName;
    this.team.players[this.selectedPlayerIndex].playerSurname = editedPlayer.playerSurname;
    this.team.players[this.selectedPlayerIndex].number = editedPlayer.number;
    this.team.players[this.selectedPlayerIndex].height = editedPlayer.height;
    this.team.players[this.selectedPlayerIndex].appearances = editedPlayer.appearances;
    
    console.log(editedPlayer);
    console.log(this.selectedPlayerIndex);
  }

}
