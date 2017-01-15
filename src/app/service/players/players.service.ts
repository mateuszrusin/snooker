import {Injectable} from "@angular/core";
import {Player} from "../../type/player";

@Injectable()
export class PlayersService {

    player1: Player = {
        name: 'Jan Maj',
        points: 0,
        frames: 0
    }

    player2: Player = {
        name: 'Adam Nowak',
        points: 0,
        frames: 0
    }

    getFirstPlayer(): Player {
        return this.player1;
    }

    getSecondPlayer(): Player {
        return this.player2;
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
}
