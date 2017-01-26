import { Injectable } from '@angular/core';
import {Break} from "../break/break.service";
import {PlayersService} from "../players/players.service";
import {Ball} from "../../type/ball";
import {Player} from "../../type/player";
import {State} from "../../type/state";

@Injectable()
export class StateService  {

    private peer;

    private break: Break;
    
    private states: State[] = [];

    constructor(breakService: Break, private players: PlayersService) {
        this.break = breakService;
        this.peer = new Peer('CONTROL', {key: '0yh3zdxin2zc9pb9'});
    }

    select(ball: Ball):void {
        this.break.update(ball);
        this.players.addPoints(ball.points);
        this.save();
        this.send();
    }

    enter(): void {
        this.players.toggle();
        this.break.reset();
        this.save();
        this.send();
    }

    foul(points: number): void {
        this.players.toggle();
        this.players.addPoints(points);
        this.break.reset();
        this.save();
        this.send();
    }

    frame(): void {
        const winner: Player = this.players.getFrameWinner();

        if (winner) {
            this.players.updateFrameWinner(winner);
            this.players.startNewFrame();
        } else {
            alert("Draw, need to re-spot black :D");
        }

        this.break.reset();
        this.save();
        this.send();
    }

    back(): void {
        this.states.pop();

        this.players.player1.points = this.current().player1.points;
        this.players.player1.frames = this.current().player1.frames;
        this.players.player1.active = this.current().player1.active;

        this.players.player2.points = this.current().player2.points;
        this.players.player2.frames = this.current().player2.frames;
        this.players.player2.active = this.current().player2.active;

        this.break.total = this.current().break.total;
        this.break.order = this.current().break.order.slice();
        this.send();
    }

    private save(): void {
        this.states.push({
            player1: {
                points: this.players.player1.points,
                frames: this.players.player1.frames,
                active: this.players.player1.active
            },
            player2: {
                points: this.players.player2.points,
                frames: this.players.player2.frames,
                active: this.players.player2.active
            },
            break: {
                total: this.break.total,
                order: this.break.order.slice()
            }
        })
    }

    private send(): void {
        let state = this.current();
        let conn = this.peer.connect('RESULT');

        conn.on('open', function() {
            conn.send(state);
        });
    }

    private current(): State {
        return this.states[this.states.length-1];
    }
}
