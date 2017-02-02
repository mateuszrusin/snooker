import {Injectable} from "@angular/core";
import {State} from "../../type/state";

@Injectable()
export class Result {

    player1: State = {
        points: 0,
        frames: 0,
        active: true
    }
    player2: State = {
        points: 0,
        frames: 0,
        active: false
    }

    points(points: number): void {
        this.active().points += points;
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
            active: true
        }
        this.player2 = {
            points: 0,
            frames: 0,
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
