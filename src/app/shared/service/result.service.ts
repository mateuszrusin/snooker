import {Injectable} from "@angular/core";
import {Player} from "../type/player";
import {Result} from "../type/result";
import * as _ from "lodash";

@Injectable()
export class ResultService {

    result: Result = {
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

    points(points: number): void {
        this.active().points += points;
    }

    frame(): void {
        this.winner();
        this.reset();
    }

    reset(): void {
        this.result.player1.points = 0;
        this.result.player2.points = 0;
    }

    toggle(): void {
        this.result.player1.active = !this.result.player1.active;
        this.result.player2.active = !this.result.player2.active;
    }

    clear(): void {

    }

    get(): Result {
        return this.result;
    }

    set(result: Result): void {
        this.result.player1 = _.cloneDeep(result.player1);
        this.result.player2 = _.cloneDeep(result.player2);
    }

    private active(): Player {
        return this.result.player1.active ? this.result.player1 : this.result.player2;
    }

    private winner(): void {
        if (this.result.player1.points > this.result.player2.points) {
            this.result.player1.frames++;
        }
        if (this.result.player1.points < this.result.player2.points) {
            this.result.player2.frames++;
        }
    }
}