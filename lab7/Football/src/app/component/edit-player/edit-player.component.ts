import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FootballPlayer} from '../../model/FootballPlayer';
import { GoalKeeper } from '../../model/GoalKeeper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService} from '../../service/team.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  @Input() model;

  @Output() editedPlayer = new EventEmitter<FootballPlayer>();

  //cloneOfA = JSON.parse(JSON.stringify(this.model));


  editPlayerForm: FormGroup;
  selectedPosition;
  objectBeforeChnges:FootballPlayer = this.model;

  constructor(private fb: FormBuilder, private teamService: TeamService) {
   
   }

  ngOnInit() {
    this.editPlayerForm =this.fb.group({
      playerName: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      playerSurname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      number: ['',[Validators.required,Validators.min(1), Validators.max(99)]],
      height: ['',[Validators.required,Validators.min(130), Validators.max(250)]],
      appearances: ['',[Validators.required,Validators.min(0), Validators.max(999)]]
    });
  }

  ngOnChanges(){
    if(this.model){
    this.editPlayerForm.patchValue({
      playerName: this.model.playerName,
      playerSurname: this.model.playerSurname,
      number: this.model.number,
      height: this.model.height,
      appearances: this.model.appearances
    })
    }
  }

  onEdit(){
    
    this.editedPlayer.emit(new FootballPlayer(
      this.editPlayerForm.get('playerName').value,
      this.editPlayerForm.get('playerSurname').value,
      'basic',
      this.editPlayerForm.get('number').value,
      this.editPlayerForm.get('height').value,
      this.editPlayerForm.get('appearances').value
    ));
  }

}
