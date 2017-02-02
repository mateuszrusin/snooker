import { Injectable } from '@angular/core';
import {Break} from "../break/break.service";
import {Ball} from "../../type/ball";
import {State} from "../../type/state";
import {Config} from "../config/config.service";
import {Result} from "../result/result.service";
import {Snapshot} from "../../type/snapshot";

@Injectable()
export class Game  {

    private break: Break;
    private history: Snapshot[] = [];

    constructor(breakService: Break, private result: Result, private config: Config) {
        this.break = breakService;
    }

    select(ball: Ball): void {
        this.save();
        this.break.update(ball);
        this.result.points(ball.points);
    }

    enter(): void {
        this.save();
        this.result.toggle();
        this.break.reset();
    }

    foul(points: number): void {
        this.save();
        this.result.toggle();
        this.result.points(points);
        this.break.reset();
    }

    frame(): void {
        this.save();
        this.result.frame();
        this.break.reset();
    }

    back(): void {
        const current = this.history.pop();

        if (current) {
            this.result.player1 = current.player1;
            this.result.player2 = current.player2;

            this.break.total = current.break.total;
            this.break.order = current.break.order.slice();
        }
    }

    clear(): void {
        this.result.clear();
        this.break.reset();
        this.history = [];
    }

    private save(): void {
        this.history.push({
            player1: Object.assign({}, this.result.player1),
            player2: Object.assign({}, this.result.player2),
            break: {
                total: this.break.total,
                order: this.break.order.slice()
            }
        })
    }
}
