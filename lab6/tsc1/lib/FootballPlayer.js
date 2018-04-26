"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FootballPlayer = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FootballPlayer =
/*#__PURE__*/
function () {
  function FootballPlayer(playerName, playerSurname, position, height, number, appearances) {
    _classCallCheck(this, FootballPlayer);

    this.playerName = playerName;
    this.playerSurname = playerSurname;
    this.position = position;
    this.height = height;
    this.number = number;
    this.appearances = appearances;
  }

  _createClass(FootballPlayer, [{
    key: "playerPresentation",
    value: function playerPresentation() {
      return "I'm ".concat(this.playerName, " ").concat(this.playerSurname, ".");
    }
  }, {
    key: "playerPosition",
    value: function playerPosition() {
      return "He is a ".concat(this.position, ".");
    }
  }, {
    key: "increaseAppearances",
    value: function increaseAppearances() {
      this.appearances += 1;
    }
  }]);

  return FootballPlayer;
}();

exports.FootballPlayer = FootballPlayer;