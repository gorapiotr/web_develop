

var FootballTeam = (function () {

    var name = "Liverpool";
    var country = "England";
    var leauge = "Premier League";
    var players = ["Mane", "Firmino", "van Dijk", "Henderson", "Milner", "Loveren", "Moreno", "Karius"];

    

    amountPlayers = function(){
        return this.players.length;
    };

     getThreeFirstLettersTeamName = function(){
        return this.name[0].toUpperCase()+this.name[1].toUpperCase()+this.name[2].toUpperCase();
    };

     getUppercaseName =  function(){
        return this.name.toUpperCase();
    };

    return{
        name: name,
        players: players,
        amountPlayers: amountPlayers,
        getThreeFirstLettersTeamName: getThreeFirstLettersTeamName,
        getUppercaseName: getUppercaseName
    }

})();

