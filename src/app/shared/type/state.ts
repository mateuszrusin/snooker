import {Break} from "./break";
import {Result} from "./result";
import {Foul} from "./foul";

export interface State {
    result: Result;
    break: Break;
    foul: Foul;
}
