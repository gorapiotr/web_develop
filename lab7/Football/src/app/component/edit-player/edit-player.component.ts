import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FootballPlayer} from '../../model/FootballPlayer';
import { GoalKeeper } from '../../model/GoalKeeper';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  @Input() model;


  editPlayerForm: FormGroup;
  selectedPosition;
  objectBeforeChnges:FootballPlayer = this.model;


  constructor(fb: FormBuilder) {
    this.editPlayerForm = fb.group({
      name: fb.group({
        first: ['Nancy'],
        last: 'Drew',
      }),
      email: '',
    });
   }

  ngOnInit() {
  }

}
