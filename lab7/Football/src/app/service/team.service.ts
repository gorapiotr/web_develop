import { Injectable } from '@angular/core';

import { FootballPlayer} from '../model/FootballPlayer';
import { GoalKeeper} from '../model/GoalKeeper';
import {Forward} from '../model/ForwardPlayer';
import {FootballTeam} from '../model/FootballTeam';
import {Liverpool} from '../model/Liverpool';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LeagueTeam} from '../model/LeagueTeam';


@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam(): Observable<FootballTeam> {
    return of(Liverpool);
  }

  getLeagueTable(){
    return this.http.get('http://localhost:4003/getLeagueTable');
  }

}
