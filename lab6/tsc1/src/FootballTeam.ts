import {Forward} from './ForwardPlayer';
import {GoalKeeper} from './GoalKeeper';
import { FootballPlayer } from './FootballPlayer';

class FootballTeam{

    constructor (public name:string, public country:string, public league:string, public  players) {
        this.name = name; 
        this.country = country;
        this.league = league;
        this.players = players;
    }

    amountFootballTeamPlayers(){
        return this.players.length;
    }
    getThreeFirstLettersTeamName(){
        return this.name[0].toUpperCase()+this.name[1].toUpperCase()+this.name[2].toUpperCase();
    }
    showAllPlayersFromPosiotion(position="Forward"){
            let x = 0;
        this.players.forEach(function(element,index){
            if(element.position === position){
                x++;
            }    
        });
        return x;
    }
    addPlayerToTeam(player){
        this.players.push(player);
    }
    getPlayersTShirtNumbers(){
        let PlayersTShirtNumbersArray: Array<{name:string,number:number}> = [];
        this.players.forEach(function(element,index){
            PlayersTShirtNumbersArray.push({name:`${element.playerName} ${element.playerSurname}`, number: element.number});
        });
        return PlayersTShirtNumbersArray;
    }
    setNewPlayerTShirtNumber(oldNumber,newNumber){
        let numberExist = false;
        let info = "";
        this.players.find(function(element){
            if(element.number === newNumber){
                numberExist = true;
                info = "Number exist.";
            }
        });
        if(!numberExist){
        this.players.forEach(function(element,index){
            if(element.number === oldNumber){
                element.number = newNumber;
                info = "Number changed.";
            }
        });
        }   
        return info;  
    }
    increaseAppearanceAfterMatch(){
        this.players.forEach(function(player){
            player.increaseAppearances();
        })
    }
    findPlayersListWithBiggestAppearances(howMany:number){
        let tempPlayersArray = this.players;
        tempPlayersArray.sort(function(a, b){
            return b.appearances - a.appearances;
        })
        let playersWithBiggestAppearances: Array<FootballPlayer> =[];
        tempPlayersArray.slice(0,howMany).map(i=>{
            playersWithBiggestAppearances.push(i);
        })

        return playersWithBiggestAppearances;
    }

}




/// Players
let JerzyDudek = new GoalKeeper("Jerzy", "Dudek", "Acrobatic",182,1, 34);
let RobertLewandowski = new Forward("Robert", "Lewandowski","Left", 190, 11,45);
let MohamedSalah = new Forward("Mohamed", "Salah", "Rigth", 185,11,23);
let RobertoFirmino = new Forward("Roberto", "Firmino", "Left", 178,7,34);

/// Players array
let team: Array<FootballPlayer> = [JerzyDudek, RobertLewandowski, MohamedSalah, RobertoFirmino];

/// Team
let Liverpool = new FootballTeam("Liverpool", "England", "Premier League", team);


//console.log(JerzyDudek);
//console.log(RobertLewandowski);
//console.log(JerzyDudek.playerPresentation());

//console.log(Liverpool);
//console.log(Liverpool.getPlayersTShirtNumbers());

//this function increase appearance after match
console.log(MohamedSalah.appearances);
Liverpool.increaseAppearanceAfterMatch();
console.log(MohamedSalah.appearances);

console.log(Liverpool.findPlayersListWithBiggestAppearances(2));