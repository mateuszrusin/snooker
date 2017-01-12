import { Component } from '@angular/core';
import { Ball } from './ball';
import { Player } from './player';
import { Break } from "./break";
import { BALLS } from './balls';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    balls = BALLS;
    break: Break;
    activePlayer: Player;

    player1: Player = {
        name: 'Jan Maj',
        points: 0,
        frames: 0
    }
    player2: Player = {
        name: 'Adam Nowak',
        points: 0,
        frames: 0
    }

    ngOnInit(): void {
        this.togglePlayers();
        this.resetBreak();
    }

    onSelect(ball: Ball): void {
        this.updateBreak(ball);
        this.activePlayer.points += ball.points;
    }

    enter(): void {
        this.resetBreak();
        this.togglePlayers();
    }

    frame(): void {
        var winner = this.chooseFrameWinner();

        if (winner) {
            winner.frames++;
            this.startFrame();
        } else {
            alert("Draw, need to re-spot black :D")
            this.resetBreak();
        }
    }

    togglePlayers(): void {
        this.activePlayer = (this.activePlayer == this.player1 ? this.player2 : this.player1);
    }

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

    foul(): void {
        this.enter();
        this.activePlayer.points += AppComponent.showFoulPrompt();
    }

    static showFoulPrompt(): number {
        return parseInt(prompt());
    }

    chooseFrameWinner(): Player {
        switch(true) {
            case this.player1.points > this.player2.points:
                return this.player1;
            case this.player1.points < this.player2.points:
                return this.player2;
            default:
                return null;
        }
    }

    startFrame(): void {
        this.player1.points = 0;
        this.player2.points = 0;
        this.resetBreak();
    }

}
