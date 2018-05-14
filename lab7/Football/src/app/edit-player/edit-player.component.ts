import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FootballPlayer} from '../model/FootballPlayer';
import { GoalKeeper } from '../model/GoalKeeper';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  @Input() model;

  selectedPosition;

  objectBeforeChnges:FootballPlayer = this.model;


  constructor() { }

  ngOnInit() {
  }

}
