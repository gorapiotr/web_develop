import { Component, OnInit, Input } from '@angular/core';
import { FootballPlayer } from '../model/FootballPlayer';
import { Liverpool } from '../model/Liverpool';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-find-player',
  templateUrl: './find-player.component.html',
  styleUrls: ['./find-player.component.css']
})
export class FindPlayerComponent implements OnInit {

  @Input() team;

  searchControl = new FormControl();

  searchItems: string[] = [];

  playerSearch: string;

  findPlayer: boolean[] = [];

  constructor() { 
    this.searchControl.valueChanges.subscribe(
      searchTerm => {
      //this.playerSearch = searchTerm;
      this.team.players.forEach((player, index)=>{
        if(player.playerName.includes(searchTerm)){
          this.findPlayer[index] = true; 
        }
        else{
          this.findPlayer[index] = false; 
        }
      });
    }
    );
  }

  ngOnInit() {

  }

}
