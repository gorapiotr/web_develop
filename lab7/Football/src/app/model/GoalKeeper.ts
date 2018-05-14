import {FootballPlayer} from './FootballPlayer';
import {Forward} from './ForwardPlayer';

export class GoalKeeper extends FootballPlayer{
    
    
    constructor(public playerName:string, public playerSurname:string, public saveTechnique: string, public height: number, public number: number, public appearances:number){
       super(playerName, playerSurname, "GoalKeeper", height, number, appearances);

    }

    getSaveTechnique(){
        return `SaveTechnique: ${this.saveTechnique}.`;
     }    
}



