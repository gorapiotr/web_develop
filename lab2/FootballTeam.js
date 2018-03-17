var lib = {};

 lib.footballTeam = (function () {

    var name = "Liverpool";
    var country = "England";
    var leauge = "Premier League";

    var fieldPositions = {
    goalkeeper: 0,
    defender: 1,
    miedfielder: 2,
    forward: 3
    };

    var players = [
        {
            name:"John",
            surname:"Mane",
            fieldPosition: fieldPositions.goalkeeper 
        },
        {  
            name:"Tom",
            surname:"Firmino",
            fieldPosition: fieldPositions.goalkeeper 
        },
        {  
            name:"Adrian",
            surname:"Firmino",
            fieldPosition: fieldPositions.defender 
        },
        {  
            name:"James",
            surname:"Henderson",
            fieldPosition: fieldPositions.miedfielder
        },
        {  
            name:"John",
            surname:"Salah",
            fieldPosition: fieldPositions.forward
        },
        {  
            name:"Robert",
            surname:"Moreno",
            fieldPosition: fieldPositions.goalkeeper 
        },

    ];


    var amountPlayers = function(){
        return players.length;
    };

    var getThreeFirstLettersTeamName = function(){
        return name[0].toUpperCase()+name[1].toUpperCase()+name[2].toUpperCase();
    };

    var getUpperCaseName =  function(){
        return name.toUpperCase();
    };

    var howManyGoalkeepers = function(){

        var counter = 0;

        players.filter(function(player){
            if(player.fieldPosition === fieldPositions.goalkeeper)
            {
                counter++;
            }
        });
        return counter;
    }

    return{
        players: players,
        amountPlayers: amountPlayers,
        getThreeFirstLettersTeamName: getThreeFirstLettersTeamName,
        getUpperCaseName: getUpperCaseName,
        howManyGoalkeepers: howManyGoalkeepers
    }

})();



console.log(lib.footballTeam.amountPlayers());

console.log(lib.footballTeam.howManyGoalkeepers());
