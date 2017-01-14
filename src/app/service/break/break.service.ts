import { Injectable} from '@angular/core';
import {Ball} from "../../type/ball";
import {Break} from "../../type/break";

@Injectable()
export class BreakService {

    break: Break;

    resetBreak(): void {
        this.break = {
            total: 0,
            order: []
        }
    }

    updateBreak(ball: Ball): void {
        this.break.order.push(ball);
        this.break.total += ball.points;
    }
}
