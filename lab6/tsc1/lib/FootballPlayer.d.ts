import { iFootballPlayer } from './iFootballPlayer';
export declare class FootballPlayer implements iFootballPlayer {
    playerName: string;
    playerSurname: string;
    position: string;
    height: number;
    number: number;
    appearances: number;
    constructor(playerName: string, playerSurname: string, position: string, height: number, number: number, appearances: number);
    playerPresentation(): string;
    playerPosition(): string;
    increaseAppearances(): void;
}
