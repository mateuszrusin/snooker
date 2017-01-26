import { Injectable } from '@angular/core';
import {Player} from "../../type/player";
import {Players} from "../players/players.service";

@Injectable()
export class Frame {

    constructor(private players: Players) {}

    winner(): Player {
        switch (true) {
            case this.players.player1.points > this.players.player2.points:
                return this.players.player1;
            case this.players.player1.points < this.players.player2.points:
                return this.players.player2;
            default:
                return null;
        }
    }

    update(player: Player): void {
        player.frames++
    }

    start(): void {
        this.players.player1.points = 0;
        this.players.player2.points = 0;
    }
}
