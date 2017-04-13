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
            this.result.set(data.result);
            this.break.set(data.break);
        }
    }

    get(): State {
        return {
            result: this.clone(this.result.get()),
            break: this.clone(this.break.get())
        }
    }

    private clone(object: any): any {
        return Object.assign({}, object);
    }
}
