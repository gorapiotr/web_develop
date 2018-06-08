import {Forward} from './ForwardPlayer';
import {GoalKeeper} from './GoalKeeper';
import { FootballPlayer } from './FootballPlayer';
import { FootballTeam } from './FootballTeam';





/// Players
let JerzyDudek = new GoalKeeper("Jerzy", "Dudek", "Acrobatic",182,1, 34);
let RobertLewandowski = new Forward("Robert", "Lewandowski","Left", 190, 11,45);
let MohamedSalah = new Forward("Mohamed", "Salah", "Rigth", 185,11,23);
let RobertoFirmino = new Forward("Roberto", "Firmino", "Left", 178,7,34);
let RobertKarius = new GoalKeeper("Robert", "Karius", "Basic", 190, 90, 21);

/// Players array
let team: Array<FootballPlayer> = [JerzyDudek, RobertLewandowski, MohamedSalah, RobertoFirmino, RobertKarius];

/// Team
export const Liverpool:FootballTeam = new FootballTeam("Liverpool", "England", "Premier League", team);








//console.log(JerzyDudek);
//console.log(RobertLewandowski);
//console.log(JerzyDudek.playerPresentation());

//console.log(Liverpool);
//console.log(Liverpool.getPlayersTShirtNumbers());
//this function increase appearance after match
//console.log(MohamedSalah.appearances);
//Liverpool.increaseAppearanceAfterMatch();
//console.log(MohamedSalah.appearances);

//console.log(Liverpool.findPlayersListWithBiggestAppearances(2));