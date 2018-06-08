import { Injectable } from '@angular/core';

import { FootballPlayer} from '../model/FootballPlayer';
import { GoalKeeper} from '../model/GoalKeeper';
import {Forward} from '../model/ForwardPlayer';
import {FootballTeam} from '../model/FootballTeam';
import {Liverpool} from '../model/Liverpool';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';


@Injectable()
export class TeamService {

  constructor() { }

  getTeam(): Observable<FootballTeam> {
    return of(Liverpool);
  }


}
