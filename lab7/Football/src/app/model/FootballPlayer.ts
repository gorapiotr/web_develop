import {iFootballPlayer} from './iFootballPlayer';

export class FootballPlayer implements iFootballPlayer{

    constructor(public playerName:string, public playerSurname:string, public position: string, public height: number, public number: number, public appearances:number){
        this.playerName = playerName;
        this.playerSurname = playerSurname;
        this.position = position;
        this.height = height;
        this.number = number;
        this.appearances = appearances;
    }

    playerPresentation(){
        return `I'm ${this.playerName} ${this.playerSurname}.`;
    }
    playerPosition(){
        return `He is a ${this.position}.`;
    }
    increaseAppearances(){
        this.appearances += 1;
    }
}