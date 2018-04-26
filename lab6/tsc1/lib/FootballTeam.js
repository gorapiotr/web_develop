"use strict";

var _ForwardPlayer = require("./ForwardPlayer");

var _GoalKeeper = require("./GoalKeeper");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FootballTeam =
/*#__PURE__*/
function () {
  function FootballTeam(name, country, league, players) {
    _classCallCheck(this, FootballTeam);

    this.name = name;
    this.country = country;
    this.league = league;
    this.players = players;
  }

  _createClass(FootballTeam, [{
    key: "amountFootballTeamPlayers",
    value: function amountFootballTeamPlayers() {
      return this.players.length;
    }
  }, {
    key: "getThreeFirstLettersTeamName",
    value: function getThreeFirstLettersTeamName() {
      return this.name[0].toUpperCase() + this.name[1].toUpperCase() + this.name[2].toUpperCase();
    }
  }, {
    key: "showAllPlayersFromPosiotion",
    value: function showAllPlayersFromPosiotion() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Forward";
      var x = 0;
      this.players.forEach(function (element, index) {
        if (element.position === position) {
          x++;
        }
      });
      return x;
    }
  }, {
    key: "addPlayerToTeam",
    value: function addPlayerToTeam(player) {
      this.players.push(player);
    }
  }, {
    key: "getPlayersTShirtNumbers",
    value: function getPlayersTShirtNumbers() {
      var PlayersTShirtNumbersArray = [];
      this.players.forEach(function (element, index) {
        PlayersTShirtNumbersArray.push({
          name: "".concat(element.playerName, " ").concat(element.playerSurname),
          number: element.number
        });
      });
      return PlayersTShirtNumbersArray;
    }
  }, {
    key: "setNewPlayerTShirtNumber",
    value: function setNewPlayerTShirtNumber(oldNumber, newNumber) {
      var numberExist = false;
      var info = "";
      this.players.find(function (element) {
        if (element.number === newNumber) {
          numberExist = true;
          info = "Number exist.";
        }
      });

      if (!numberExist) {
        this.players.forEach(function (element, index) {
          if (element.number === oldNumber) {
            element.number = newNumber;
            info = "Number changed.";
          }
        });
      }

      return info;
    }
  }, {
    key: "increaseAppearanceAfterMatch",
    value: function increaseAppearanceAfterMatch() {
      this.players.forEach(function (player) {
        player.increaseAppearances();
      });
    }
  }, {
    key: "findPlayersListWithBiggestAppearances",
    value: function findPlayersListWithBiggestAppearances(howMany) {
      var tempPlayersArray = this.players;
      tempPlayersArray.sort(function (a, b) {
        return b.appearances - a.appearances;
      });
      var playersWithBiggestAppearances = [];
      tempPlayersArray.slice(0, howMany).map(function (i) {
        playersWithBiggestAppearances.push(i);
      });
      return playersWithBiggestAppearances;
    }
  }]);

  return FootballTeam;
}(); /// Players


var JerzyDudek = new _GoalKeeper.GoalKeeper("Jerzy", "Dudek", "Acrobatic", 182, 1, 34);
var RobertLewandowski = new _ForwardPlayer.Forward("Robert", "Lewandowski", "Left", 190, 11, 45);
var MohamedSalah = new _ForwardPlayer.Forward("Mohamed", "Salah", "Rigth", 185, 11, 23);
var RobertoFirmino = new _ForwardPlayer.Forward("Roberto", "Firmino", "Left", 178, 7, 34); /// Players array

var team = [JerzyDudek, RobertLewandowski, MohamedSalah, RobertoFirmino]; /// Team

var Liverpool = new FootballTeam("Liverpool", "England", "Premier League", team); //console.log(JerzyDudek);
//console.log(RobertLewandowski);
//console.log(JerzyDudek.playerPresentation());
//console.log(Liverpool);
//console.log(Liverpool.getPlayersTShirtNumbers());
//this function increase appearance after match

console.log(MohamedSalah.appearances);
Liverpool.increaseAppearanceAfterMatch();
console.log(MohamedSalah.appearances);
console.log(Liverpool.players);
console.log(Liverpool.findPlayersListWithBiggestAppearances(1));