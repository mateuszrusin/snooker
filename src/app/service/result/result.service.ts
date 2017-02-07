import {Injectable} from "@angular/core";
import {State} from "../../type/state";

@Injectable()
export class Result {

    private player1: State = {
        points: 0,
        frames: 0,
        factor: 1,
        active: true
    }

    private player2: State = {
        points: 0,
        frames: 0,
        factor: 1,
        active: false
    }

    points(points: number): void {
        this.active().points += points * this.active().factor;
    }

    frame(): void {
        const winner = this.winner();

        if (winner) {
            winner.frames++;
        }
        this.reset();
    }

    reset(): void {
        this.player1.points = 0;
        this.player2.points = 0;
    }

    toggle(): void {
        this.player1.active = !this.player1.active;
        this.player2.active = !this.player2.active;
    }

    clear(): void {
        this.player1 = {
            points: 0,
            frames: 0,
            factor: 1,
            active: true
        }
        this.player2 = {
            points: 0,
            frames: 0,
            factor: 1,
            active: false
        }
    }

    private active(): State {
        return this.player1.active ? this.player1 : this.player2;
    }

    private winner(): State {
        switch (true) {
            case this.player1.points > this.player2.points:
                return this.player1;
            case this.player1.points < this.player2.points:
                return this.player2;
            default:
                return null;
        }
    }
}
