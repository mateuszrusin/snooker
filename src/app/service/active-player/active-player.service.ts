import {Injectable} from "@angular/core";
import {Player} from "../../type/player";
import {PlayersService} from "./../players/players.service.ts";

@Injectable()
export class ActivePlayerService {
    activePlayer: Player;
    playersService: PlayersService;

    constructor(playersService: PlayersService) {
        this.playersService = playersService;
    }

    setActivePlayer(player: Player): void {
        this.activePlayer = player;
    }

    getActivePlayer(): Player {
        return this.activePlayer;
    }

    togglePlayer(): void {
        this.activePlayer =
            (this.activePlayer == this.playersService.getFirstPlayer() ?
                this.playersService.getSecondPlayer() : this.playersService.getFirstPlayer());
    }

    addPoints(points: number): void {
        this.activePlayer.points += points;
    }
}