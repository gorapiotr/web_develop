import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //public hero = 'Windstorm';


  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }

  heroes = HEROES;


  selectedHero: Hero;



  onSelect(currnet_hero: Hero){
    this.selectedHero = currnet_hero;
  }

  constructor() { }

  ngOnInit() {
  }

}
