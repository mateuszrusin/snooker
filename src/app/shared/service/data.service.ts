import {Injectable} from '@angular/core';
import {ResultService} from "./result.service";
import {BreakService} from "./break.service";
import {Ball} from "../type/ball";
import {State} from "../type/state";

@Injectable()
export class DataService {

    private break: BreakService;

    constructor(private result: ResultService, break_: BreakService) {
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

    set(data: State): void {
        if (data) {
            this.result.set(this.clone(data.result));
            this.break.set(this.clone(data.break));
        }
    }

    get(): State {
        const result = this.result.get();
        const break_ = this.break.get();

        return this.clone({
            result: {
                player1: {
                    points: result.player1.points,
                    frames: result.player1.frames,
                    active: result.player1.active,
                },
                player2: {
                    points: result.player2.points,
                    frames: result.player2.frames,
                    active: result.player2.active,
                }
            },
            break: {
                total: break_.total,
                order: break_.order.slice()

            }
        });
    }

    private clone(object: any): any {
        return Object.assign({}, object);
    }
}
