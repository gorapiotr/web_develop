import { Component, OnInit } from '@angular/core';
import { TeamService} from '../../service/team.service';
import {LeagueTeam} from '../../model/LeagueTeam';

@Component({
  selector: 'app-league-table',
  templateUrl: './league-table.component.html',
  styleUrls: ['./league-table.component.css']
})
export class LeagueTableComponent implements OnInit {

  public leagueTable;

  constructor(private teamService: TeamService) { 
    
  }

  ngOnInit() {
    this.getLeagueTable();
     }

  getLeagueTable() :void {
    this.teamService.getLeagueTable().subscribe(data => {this.leagueTable = data});
  }   

}
