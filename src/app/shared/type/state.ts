import {Break} from "./break";
import {Player} from "./player";

export interface State {
    player1: Player;
    player2: Player;
    break: Break;
}
