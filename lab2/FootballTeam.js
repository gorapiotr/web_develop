var FootballTeam = function(name, country , players , leauge) {

    this.name = name,
    this.country  = country,
    this.players = players,
    this.leauge = leauge,

    /*FootballTeam = function(name, country , players, leauge)
        {
            this.name = name;
            this.country = country;
            this.players = players;
            this.leauge = leauge;
        },*/
  


    this.getUppercaseName =  function(){
        return this.name.toUpperCase();
    };

    this.getThreeFirstLettersTeamName = function(){
        return this.name[0].toUpperCase()+this.name[1].toUpperCase()+this.name[2].toUpperCase();
    };

    this.amountPlayers = function(){
        return this.players.length;
    };
} 

var liverpoolPlayers = ["Mane", "Firmino", "van Dijk", "Henderson", "Milner", "Loveren", "Moreno", "Karius"];

var Liverpool = new FootballTeam("Liverpool", "England", liverpoolPlayers, "Premier League");

//class
//console.log(Liverpool);

//First method
//console.log(Liverpool.getUppercaseName());

//Second method
//console.log(Liverpool.getThreeFirstLettersTeamName());

//Third method
console.log(Liverpool.amountPlayers());
