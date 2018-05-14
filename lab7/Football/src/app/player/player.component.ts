import { Component, OnInit, Output, Input } from '@angular/core';
import { FootballPlayer } from '../model/FootballPlayer';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  @Input() playerToShow: FootballPlayer;

  ngOnInit() {
  }

}
