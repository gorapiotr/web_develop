//Parent class
function FootballPlayer (playerName, playerSurname, position) {
    this.playerName = playerName;
    this.playerSurname = playerSurname;
    this.position = position;
}

FootballPlayer.prototype = {
    playerPresentation: function(){
        return "I'm "+this.playerName+" "+this.playerSurname+".";
    },
    playerPosition: function(){
        return "He is a "+ this.position;
    }
}

//Child class
function GoalKeeper (playerName, playerSurname, saveTechnique)
{
    FootballPlayer.call(this,playerName, playerSurname);
    this.position = "GoalKeeper";
    this.saveTechnique = saveTechnique;
}

GoalKeeper.prototype = Object.create(FootballPlayer.prototype);
GoalKeeper.prototype.constructor = GoalKeeper;

// new method
GoalKeeper.prototype.getSaveTechnique = function(){
        return "SaveTechnique: "+this.saveTechnique;
}

var preferredFoot = {
    left: "left",
    right: "right"
}

//Child class
function Forward (playerName, playerSurname, preferredFoot){
    FootballPlayer.call(this,playerName, playerSurname);
    this.position = "Forward";
    this.preferredFoot = preferredFoot;
}

Forward.prototype = Object.create(FootballPlayer.prototype);
Forward.prototype.constructor = GoalKeeper;

// new method
Forward.prototype.getBestFoot = function(){
    return "Preferred Foot: "+this.preferredFoot;
}

// Class FootballTeam
function FootballTeam (name, country, league, players) {
    this.name = name; 
    this.country = country;
    this.league = league;
    this.players = players;
};

FootballTeam.prototype = {
    amountFootballTeamPlayers: function()
    {
        return this.players.length;
    },
    getThreeFirstLettersTeamName: function(){
        return this.name[0].toUpperCase()+this.name[1].toUpperCase()+this.name[2].toUpperCase();
    }    
}

// Objects
var JerzyDudek = new GoalKeeper("Jerzy","Dudek","Acrobatic");
var RobertLewandowski = new Forward("Robert", "Lewandowski", preferredFoot.left);
var Liverpool = new FootballTeam("Liverpool", "England","Premier League", [JerzyDudek, RobertLewandowski]);

// GoalKeeper
console.log(JerzyDudek.playerPosition());
console.log(JerzyDudek.getSaveTechnique());

// Forward
console.log(RobertLewandowski.playerPresentation());
console.log(RobertLewandowski.getBestFoot());

//FootballTeam
console.log(Liverpool.amountFootballTeamPlayers());

