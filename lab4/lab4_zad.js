class FootballPlayer {

    constructor (playerName, playerSurname, position) {
        this.playerName = playerName;
        this.playerSurname = playerSurname;
        this.position = position;
    }

    playerPresentation(){
        return `I'm ${this.playerName} ${this.playerSurname}.`;
    }
    playerPosition(){
        return `He is a ${this.position}.`;
    }
}


class GoalKeeper extends FootballPlayer {

     constructor(playerName, playerSurname, saveTechnique){
        super(playerName, playerSurname, "GoalKeeper");
        this.saveTechnique = saveTechnique;
     }

     getSaveTechnique(){
        return `SaveTechnique: ${this.saveTechnique}.`;
     }
}

class Forward extends FootballPlayer {

    constructor(playerName, playerSurname, preferredFoot){
       super(playerName, playerSurname, "Forward");
       this.preferredFoot = preferredFoot;
    }

    getPreferredFoot(){
       return `preferredFoot: ${this.preferredFoot}.`;
    }
}










aFootballPlayer = new FootballPlayer("Jan", "Kowalski", "Forward");

aGoalKeeper = new GoalKeeper("Jerzy", "Dudek", "Acrobatic");

aForward = new Forward("Robert", "Lewandowski", "Left");

//zz = new z("aa", "aaa", "asdad");


//FootballPlayer
//console.log(aFootballPlayer.playerPresentation());


//GoalKeeper
console.log(aGoalKeeper);
//console.log(aGoalKeeper.getSaveTechnique());

//Forward
console.log(aForward.getPreferredFoot());

//console.log(zz);
