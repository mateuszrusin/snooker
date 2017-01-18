import {Break} from "./break";
import {StoredPlayer} from "./storedPlayer";

export interface State {
    player1: StoredPlayer;
    player2: StoredPlayer;
    break: Break;
}
