import {Injectable} from "@angular/core";
import {ResultService} from "./result.service";
import {BreakService} from "./break.service";
import {Ball} from "../type/ball";
import {State} from "../type/state";
import * as _ from "lodash";
import {FoulService} from "./foul.service";

@Injectable()
export class DataService {

    private break: BreakService;

    constructor(private result: ResultService, private foul: FoulService, breakService: BreakService) {
        this.break = breakService;
    }

    select(ball: Ball): void {
        this.result.points(ball.points);
        this.break.update(ball);
        this.foul.reset();
    }

    enter(): void {
        this.result.toggle();
        this.break.reset();
        this.foul.reset();
    }

    fine(points: number): void {
        this.result.toggle();
        this.result.points(points);
        this.break.reset();
        this.foul.fine(points);
    }

    frame(): void {
        this.result.frame();
        this.break.reset();
        this.foul.reset();
    }

    set(data: State): void {
        this.result.set(data.result);
        this.break.set(data.break);
        this.foul.set(data.foul)
    }

    get(): State {
        return _.cloneDeep({
            result: this.result.get(),
            break:  this.break.get(),
            foul: this.foul.get()
        });
    }
}
