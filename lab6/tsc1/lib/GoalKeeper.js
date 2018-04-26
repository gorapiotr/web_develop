"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoalKeeper = void 0;

var _FootballPlayer2 = require("./FootballPlayer");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoalKeeper =
/*#__PURE__*/
function (_FootballPlayer) {
  _inherits(GoalKeeper, _FootballPlayer);

  function GoalKeeper(playerName, playerSurname, saveTechnique, height, number, appearances) {
    _classCallCheck(this, GoalKeeper);

    return _possibleConstructorReturn(this, (GoalKeeper.__proto__ || Object.getPrototypeOf(GoalKeeper)).call(this, playerName, playerSurname, "GoalKeeper", height, number, appearances));
  }

  _createClass(GoalKeeper, [{
    key: "getSaveTechnique",
    value: function getSaveTechnique() {
      return "SaveTechnique: ".concat(this.saveTechnique, ".");
    }
  }]);

  return GoalKeeper;
}(_FootballPlayer2.FootballPlayer);

exports.GoalKeeper = GoalKeeper;