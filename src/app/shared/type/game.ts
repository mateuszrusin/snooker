import {User} from "./user";

export interface Game {
    player1: User,
    player2: User,
    referee: User,
    frames: number,
    title: string
}