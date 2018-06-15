import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FootballPlayer } from '../../model/FootballPlayer';
import { GoalKeeper } from '../../model/GoalKeeper';
import { Forward } from '../../model/ForwardPlayer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from '../../service/team.service';

@Component({
  selector: 'app-add-player-to-team',
  templateUrl: './add-player-to-team.component.html',
  styleUrls: ['./add-player-to-team.component.css']
})
export class AddPlayerToTeamComponent implements OnInit {

  @Output() addPlayerToTeamArray = new EventEmitter<FootballPlayer>();

 
  model = new FootballPlayer("John", "Novak", "GoalKeeper",180,1,0);
  playerPosition = ["GoalKeeper", "Forward"];
  selectedPosition;
  showForm:boolean = false;
  addPlayerForm: FormGroup;

  constructor(private fb: FormBuilder, private teamService: TeamService) { }


  ngOnInit() {
    this.addPlayerForm =this.fb.group({
      playerName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      playerSurname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      number: ['',[Validators.required,Validators.min(1), Validators.max(99)]],
      height: ['',[Validators.required,Validators.min(130), Validators.max(250)]],
      appearances: ['',[Validators.required,Validators.min(0), Validators.max(999)]],
      position: ['',[Validators.required]]
    });

    this.addPlayerForm.patchValue({
      playerName: this.model.playerName,
      playerSurname: this.model.playerSurname,
      number: this.model.number,
      height: this.model.height,
      appearances: this.model.appearances
    });
  }


  changeShowFormProperty(){
    this.showForm = !this.showForm;
  }

  addPlayerToTeam(){
    this.addPlayerToTeamArray.emit(this.returnPlayerObject());
    //console.log(this.addPlayerForm.get('position').value[0]);
  }

  /*returnPlayerObject(){
    switch(this.addPlayerForm.get('position').value){
      case this.playerPosition[0]:
        console.log("aa"); 
        return new GoalKeeper("a","a","a",1,1,1);
      case this.playerPosition[1]: 
        return new Forward(this.model.playerName, this.model.playerSurname,"Left", this.model.number, this.model.height, this.model.appearances);
      default:
    } 
  }*/

  returnPlayerObject(){
    switch(this.addPlayerForm.get('position').value[0]){
      case this.playerPosition[0]: 
        return new GoalKeeper(
          this.addPlayerForm.get('playerName').value,
          this.addPlayerForm.get('playerSurname').value,
          'Acrobatic',
          this.addPlayerForm.get('height').value,
          this.addPlayerForm.get('number').value,
          this.addPlayerForm.get('appearances').value);
      case this.playerPosition[1]: 
        return new Forward(
          this.addPlayerForm.get('playerName').value,
          this.addPlayerForm.get('playerSurname').value,
          'Left',
          this.addPlayerForm.get('height').value,
          this.addPlayerForm.get('number').value,
          this.addPlayerForm.get('appearances').value); 
          default:
    } 
  }
 


}
