import { Component, OnInit } from '@angular/core';
import { Liverpool } from '../model/Liverpool';
import { FootballPlayer } from '../model/FootballPlayer';
import { GoalKeeper } from '../model/GoalKeeper';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  
  team = Liverpool;

  selectedPlayer: FootballPlayer = this.team.players[0];

  constructor() { }

  ngOnInit() {
  }

  addPlayer(player: FootballPlayer){
    this.team.players.push(player);
  }

  removePlayer(index: number){
    this.team.players.splice(index,1);
  }
  
  selectPlayer(index: number){
    this.selectedPlayer = this.team.players[index];
    console.log(this.selectedPlayer);
  }

}
