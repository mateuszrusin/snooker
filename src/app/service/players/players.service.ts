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

}
