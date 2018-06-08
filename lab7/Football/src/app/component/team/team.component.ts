import { Component, OnInit } from '@angular/core';
import { Liverpool } from '../../model/Liverpool';
import { FootballPlayer } from '../../model/FootballPlayer';
import { GoalKeeper } from '../../model/GoalKeeper';
import { TeamService} from '../../service/team.service';
import { FootballTeam } from '../../model/FootballTeam';

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

  constructor( private teamService: TeamService) { }

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
    console.log(this.selectedPlayer);
  }

  setRemovePlayerIndex(index: number){
    this.selectedPlayerIndex = index;
  }

}
