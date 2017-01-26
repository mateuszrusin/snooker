import {Injectable} from "@angular/core";
import {Player} from "../../type/player";
import {Config} from "../config/config.service";

@Injectable()
export class Players {

    player1: Player;
    player2: Player;

    constructor(config: Config) {
        const players = config.get('players');

        this.player1 = this.create(players.player1.active);
        this.player2 = this.create(players.player2.active);
    }

    toggle(): void {
        this.player1.active = !this.player1.active;
        this.player2.active = !this.player2.active;
    }


    points(points: number): void {
        this.active().points += points;
    }

    private create(active: boolean): Player {
        return {
            points: 0,
            frames: 0,
            active: active
        }
    }

    private active(): Player {
        return this.player1.active ? this.player1 : this.player2;
    }
}
