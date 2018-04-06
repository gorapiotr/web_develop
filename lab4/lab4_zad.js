class FootballPlayer {

    constructor (playerName, playerSurname, position, height, number) {
        this.playerName = playerName;
        this.playerSurname = playerSurname;
        this.position = position;
        this.height = height;
        this.number = number
    }

    playerPresentation(){
        return `I'm ${this.playerName} ${this.playerSurname}.`;
    }
    playerPosition(){
        return `He is a ${this.position}.`;
    }
}


class GoalKeeper extends FootballPlayer {

     
     constructor(playerName, playerSurname, saveTechnique, height, number){
        super(playerName, playerSurname, "GoalKeeper",height, number);
        this.saveTechnique = saveTechnique;
     }

     getSaveTechnique(){
        return `SaveTechnique: ${this.saveTechnique}.`;
     }

}

class Forward extends FootballPlayer {

    constructor(playerName, playerSurname, preferredFoot, height, number){
       super(playerName, playerSurname, "Forward", height, number);
       this.preferredFoot = preferredFoot;
    }

    getPreferredFoot(){
       return `preferredFoot: ${this.preferredFoot}.`;
    }
}


class FootballTeam {

    constructor (name, country, league, players) {
        this.name = name; 
        this.country = country;
        this.league = league;
        this.players = players;
    }

    amountFootballTeamPlayers()
    {
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
        let PlayersTShirtNumbersArray= [];
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


}







//Players
JerzyDudek = new GoalKeeper("Jerzy", "Dudek", "Acrobatic",182,1);
LorisKarius = new GoalKeeper("Loris", "Karius", "Acrobatic",185,31);
RobertLewandowski = new Forward("Robert", "Lewandowski", "Left",190,9);
MohamedSalah = new Forward("Mohamed", "Salah", "Rigth", 185,11);
RobertoFirmino = new Forward("Roberto", "Firmino", "Left", 178,7);

Liverpool = new FootballTeam("Liverpool", "England", "Premier League", [JerzyDudek, LorisKarius, MohamedSalah, RobertLewandowski]);


//FootballTeam

console.log(Liverpool.getThreeFirstLettersTeamName());
console.log(Liverpool.amountFootballTeamPlayers());
console.log(Liverpool.showAllPlayersFromPosiotion("GoalKeeper"));

Liverpool.addPlayerToTeam(RobertoFirmino);

console.log(Liverpool.getPlayersTShirtNumbers());

console.log(Liverpool.setNewPlayerTShirtNumber(1,99));

console.log(Liverpool.getPlayersTShirtNumbers());

//FootballPlayer
//console.log(aFootballPlayer.playerPresentation());

//GoalKeeper
//console.log(aGoalKeeper);
//console.log(aGoalKeeper.getSaveTechnique());

//Forward
//console.log(aForward.getPreferredFoot());

//console.log(zz);
