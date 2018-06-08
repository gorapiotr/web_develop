import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-remove-player',
  templateUrl: './remove-player.component.html',
  styleUrls: ['./remove-player.component.css']
})
export class RemovePlayerComponent implements OnInit {

  @Input() model;
  @Input() team;

  removePlayer(){
    this.team.players.splice(this.model,1);
    if(this.model == this.team.players.length){
      this.model = 0;
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
