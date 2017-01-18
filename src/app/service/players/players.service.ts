import {Injectable, OnInit} from "@angular/core";
import {Player} from "../../type/player";
import {ConfigService} from "../config/config.service";

@Injectable()
export class PlayersService {

    private config: any;

    player1: Player;
    player2: Player;

    constructor(configService: ConfigService) {
        this.config = configService.get('players');

        //playerFactory?
        this.player1 = this.create(this.config.player1);
        this.player2 = this.create(this.config.player2);
    }

    toggle(): void {
        this.player1.active = !this.player1.active;
        this.player2.active = !this.player2.active;
    }


    addPoints(points: number): void {
        this.active().points += points;
    }

    getFrameWinner(): Player {
        switch (true) {
            case this.player1.points > this.player2.points:
                return this.player1;
            case this.player1.points < this.player2.points:
                return this.player2;
            default:
                return null;
        }
    }

    updateFrameWinner(player:Player): void {
        player.frames++
    }

    startNewFrame(): void {
        this.player1.points = 0;
        this.player2.points = 0;
    }

    private create(data): Player {
        return {
            name: data.name,
            points: 0,
            frames: 0,
            active: data.start
        }
    }

    private active(): Player {
        return this.player1.active ? this.player1 : this.player2;
    }
}
