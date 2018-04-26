import { FootballPlayer } from './FootballPlayer';
export declare class GoalKeeper extends FootballPlayer {
    playerName: string;
    playerSurname: string;
    saveTechnique: string;
    height: number;
    number: number;
    appearances: number;
    constructor(playerName: string, playerSurname: string, saveTechnique: string, height: number, number: number, appearances: number);
    getSaveTechnique(): string;
}
