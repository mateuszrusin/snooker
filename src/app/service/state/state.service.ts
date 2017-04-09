import { Injectable } from '@angular/core';
import {Break} from "../../control/service/break.service";
import {Players} from "../players/players.service";
import {Ball} from "../../type/ball";
import {Player} from "../../type/player";
import {State} from "../../type/state";
import {Frame} from "../frame/frame.service";
import {Config} from "../config/config.service";

@Injectable()
export class StateService  {

    private peer: any;
    private dest: string;
    private break: Break;
    private states: State[] = [];

    constructor(breakService: Break, private players: Players, private frame: Frame, private config: Config) {
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
        this.enter();
        this.result.points(points);
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
    }z
}
