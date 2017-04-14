import {Injectable} from '@angular/core';
import {ResultService} from "./result.service";
import {BreakService} from "./break.service";
import {Ball} from "../type/ball";
import {State} from "../type/state";
import * as _ from "lodash";

@Injectable()
export class DataService {

    private break: BreakService;

    constructor(private result: ResultService, breakService: BreakService) {
        this.break = breakService;
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
        return _.cloneDeep({
            result: this.result.get(),
            break:  this.break.get()
        });
    }
}
