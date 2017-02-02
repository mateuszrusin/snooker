import {State} from "./state";
import {Break} from "./break";

export interface Snapshot {
    player1: State,
    player2: State,
    break: Break
}
