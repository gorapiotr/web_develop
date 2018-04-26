import {FootballPlayer} from './FootballPlayer';

export class Forward extends FootballPlayer{
    
    
    constructor(public playerName:string, public playerSurname:string, public preferredFoot: string, public height: number, public number: number, public appearances:number){
       super(playerName, playerSurname, "Forward", height, number, appearances);

    }    

    getPreferredFoot(){
        return `preferredFoot: ${this.preferredFoot}.`;
     }
}