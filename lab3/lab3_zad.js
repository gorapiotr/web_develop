///Klasa FootballTeam///

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

//Klasa FootballPlayer///

function FootballPlayer (playerName, playerSurname, position) {
    this.playerName = playerName;
    this.playerSurname = playerSurname;
    this.position = position;
};

FootballPlayer.prototype = {
    playerPresentation: function(){
        return "I'm "+this.playerName+" "+this.playerSurname+".";
    },
    playerPosition: function(){
        return "He is a"+ this.position;
    }

}

///Podział na pozycja na boisku///

var playerList = [
    new FootballPlayer("Sadio", "Mane", "Forward"),
    new FootballPlayer("Boby", "Firmino","Striker"),
    new FootballPlayer("Json", "Milner", "Defender")
];


//FOOTBALLTEAM
Liverpool = new FootballTeam("Liverpool", "England", "Premier League", playerList);
//liczba graczy w druzynie
console.log(Liverpool.amountFootballTeamPlayers());

//Duze litery
//console.log(Liverpool.getThreeFirstLettersTeamName());


//FOOTBALLPLAYER
//Mane = new FootballPlayer("Sadio", "Mane", "Forward");
//prezentacja gracza
//console.log(Mane.playerPresentation());
//pozycja na ktore gra
//console.log(Mane.playerPosition());