import {Injectable} from '@angular/core';
import {Result} from "./result.service";
import {Break} from "./break.service";
import {Ball} from "../../type/ball";

@Injectable()
export class DataService {

    private break: Break;

    constructor(private result: Result, break_: Break) {
        this.break = break_;
    }

    select(ball: Ball): void {
        this.result.points(ball.points);
        this.break.update(ball);
    }

    enter(): void {
        this.result.toggle();
        this.break.reset();
    }

    foul(points: number): void {
        this.result.toggle();
        this.result.points(points);
        this.break.reset();
    }

    frame(): void {
        this.result.frame();
        this.break.reset();
    }

    clear(): void {
        this.result.clear();
        this.break.reset();
    }

    set(data: any): void {
        if (data) {
            this.result.player1 = this.clone(data.player1);
            this.result.player2 = this.clone(data.player2);

            this.break.total = data.break.total;
            this.break.order = data.break.order.slice();
        }
    }

    get(): any {
        return {
            player1: this.clone(this.result.player1),
            player2: this.clone(this.result.player2),
            break: {
                total: this.break.total,
                order: this.break.order.slice()
            }
        }
    }

    private clone(object: any): any {
        return Object.assign({}, object);
    }
}
