import { Injectable, OnInit } from '@angular/core';
import {Break} from "../break/break.service";
import {PlayersService} from "../players/players.service";
import {Ball} from "../../type/ball";
import {Player} from "../../type/player";
import {State} from "../../type/state";

@Injectable()
export class StateService implements OnInit {



    private break: Break;
    private players: PlayersService;
    
    private states: State[] = [];

    constructor(breakService: Break, playersService: PlayersService) {
        this.break = breakService;
        this.players = playersService;


    }
    
    ngOnInit() {
    }

    select(ball: Ball):void {
        this.save();
        this.break.update(ball);
        this.players.addPoints(ball.points);


    }

    enter(): void {
        this.save();
        this.players.toggle();
        this.break.reset();

        // const peer = new SimplePeer();
        // console.log(peer);
    }

    foul(points: number): void {
        this.save();
        this.players.toggle();
        this.players.addPoints(points);
        this.break.reset();
    }

    frame(): void {
        this.save();
        const winner: Player = this.players.getFrameWinner();

        if (winner) {
            this.players.updateFrameWinner(winner);
            this.players.startNewFrame();
        } else {
            alert("Draw, need to re-spot black :D");
        }

        this.break.reset();
    }

    back(): void {
        const state = this.states.pop();

        this.players.player1.points = state.player1.points;
        this.players.player1.frames = state.player1.frames;
        this.players.player1.active = state.player1.active;

        this.players.player2.points = state.player2.points;
        this.players.player2.frames = state.player2.frames;
        this.players.player2.active = state.player2.active;

        this.break.total = state.break.total;
        this.break.order = state.break.order.slice();
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
        });
    }
}
