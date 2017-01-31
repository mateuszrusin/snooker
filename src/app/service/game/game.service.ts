import { Injectable } from '@angular/core';
import {Break} from "../break/break.service";
import {Ball} from "../../type/ball";
import {State} from "../../type/state";
import {Config} from "../config/config.service";
import {Result} from "../result/result.service";

@Injectable()
export class GameService  {

    private break: Break;
    private states: State[] = [];

    constructor(breakService: Break, private result: Result, private config: Config) {
        this.break = breakService;
    }
    select(ball: Ball): void {
        this.break.update(ball);
        this.result.points(ball.points);
        this.save();
        this.send();
    }

    enter(): void {
        this.result.toggle();
        this.break.reset();
        this.save();
        this.send();
    }

    foul(points: number): void {
        this.result.toggle();
        this.result.points(points);
        this.break.reset();
        this.save();
        this.send();
    }

    win(): void {
        const winner: State = this.result.winner();

        if (winner) {
            // this.result.update(winner);
            // this.frame.start();
        } else {
            alert("Draw, need to re-spot black :D");
        }

        this.break.reset();
        this.save();
        this.send();
    }

    back(): void {
        // this.states.pop();
        //
        // const current = this.current();
        //
        // if (current) {
        //     this.players.player1 = current.player1;
        //     this.players.player2 = current.player2;
        //
        //     this.break.total = current.break.total;
        //     this.break.order = current.break.order.slice();
        //     this.send();
        // }
    }

    private save(): void {
        // this.states.push({
        //     player1: Object.assign({}, this.players.player1),
        //     player2: Object.assign({}, this.players.player2),
        //     break: {
        //         total: this.break.total,
        //         order: this.break.order.slice()
        //     }
        // })
    }

    private send(): void {

    }

    private current(): State {
        return this.states[this.states.length-1]; // TODO: or reset state?
    }
}
