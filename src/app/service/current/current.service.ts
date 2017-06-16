import {Injectable} from "@angular/core";
import {State} from "../../type/state";
import {Result} from "../result/result.service";
import {Config} from "../config/config.service";

@Injectable()
export class Current {

    current: State;

    constructor(private result: Result, private config: Config) {
        this.current = this.result.player1;
        this.config.get('game.player1').active = true;
        this.config.get('game.player2').active = false;
    }
    //
    // toggle(): void {
    //     //this.current =
    // }
    //
    // points(points: number): void {
    //     this.active().points += points;
    // }
    //
    // frame(): void {
    //     this.winner();
    //     this.reset();
    // }
    //
    // reset(): void {
    //     this.player1.points = 0;
    //     this.player2.points = 0;
    // }
    //
    // clear(): void {
    //     this.player1 = {
    //         points: 0,
    //         frames: 0,
    //         active: true
    //     }
    //     this.player2 = {
    //         points: 0,
    //         frames: 0,
    //         active: false
    //     }
    // }
    //
    // active(): State {
    //     return this.player1.active ? this.player1 : this.player2;
    // }
    //
    // private winner(): void {
    //     if (this.player1.points > this.player2.points) {
    //         this.player1.frames++;
    //     }
    //     if (this.player1.points < this.player2.points) {
    //         this.player2.frames++;
    //     }
    // }
}
