import {Injectable} from "@angular/core";
import {Result} from "../type/result";
import * as _ from "lodash";

@Injectable()
export class ResultService {

    private result: Result = {
        player1: {
            points: 0,
            frames: 0,
            active: true
        },
        player2: {
            points: 0,
            frames: 0,
            active: false
        }
    }

    get(): Result {
        return this.result;
    }

    set(result: Result): void {
        this.result.player1 = _.cloneDeep(result.player1);
        this.result.player2 = _.cloneDeep(result.player2);
    }

    points(points: number): void {
        if (this.result.player1.active) {
            this.result.player1.points += points;
        } else {
            this.result.player2.points += points;
        }
    }

    frame(): void {
        if (this.result.player1.points > this.result.player2.points) {
            this.result.player1.frames++;
        }
        if (this.result.player1.points < this.result.player2.points) {
            this.result.player2.frames++;

        }
        this.result.player1.points = 0;
        this.result.player2.points = 0;
    }

    toggle(): void {
        this.result.player1.active = !this.result.player1.active;
        this.result.player2.active = !this.result.player2.active;
    }
}