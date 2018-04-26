import { FootballPlayer } from './FootballPlayer';
export declare class Forward extends FootballPlayer {
    playerName: string;
    playerSurname: string;
    preferredFoot: string;
    height: number;
    number: number;
    appearances: number;
    constructor(playerName: string, playerSurname: string, preferredFoot: string, height: number, number: number, appearances: number);
    getPreferredFoot(): string;
}
