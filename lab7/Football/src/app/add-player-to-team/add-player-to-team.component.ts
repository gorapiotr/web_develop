import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FootballPlayer } from '../model/FootballPlayer';
import { GoalKeeper } from '../model/GoalKeeper';
import { Forward } from '../model/ForwardPlayer';

@Component({
  selector: 'app-add-player-to-team',
  templateUrl: './add-player-to-team.component.html',
  styleUrls: ['./add-player-to-team.component.css']
})
export class AddPlayerToTeamComponent implements OnInit {

  @Output() addPlayerToTeamArray = new EventEmitter<FootballPlayer>();

  model = new FootballPlayer("John", "Novak", "GoalKeeper",1,1,1);

  playerPosition = ["GoalKeeper", "Forward"];

  selectedPosition;

  showForm:boolean = false;

  changeShowFormProperty(){
    this.showForm = !this.showForm;
  }

  addPlayerToTeam(){
   //console.log(this.returnPlayerObject());
    this.addPlayerToTeamArray.emit(this.returnPlayerObject());
  }

  returnPlayerObject(){
    switch(this.selectedPosition[0]){
      case this.playerPosition[0]: 
        return new GoalKeeper(this.model.playerName, this.model.playerSurname,"Basic", this.model.number, this.model.height, this.model.appearances);
      case this.playerPosition[1]: 
        return new Forward(this.model.playerName, this.model.playerSurname,"Left", this.model.number, this.model.height, this.model.appearances);
      default:
    } 
  }

  constructor() { }

  ngOnInit() {
  }

}
