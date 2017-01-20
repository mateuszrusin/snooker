import { Injectable, OnInit } from '@angular/core';
import {Break} from "../break/break.service";
import {PlayersService} from "../players/players.service";
import {Ball} from "../../type/ball";
import {Player} from "../../type/player";
import {State} from "../../type/state";
import * as SimplePeer from 'simple-peer';

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
        this.break.update(ball);
        this.players.addPoints(ball.points);
        this.save();
    }

    enter():void {
        this.players.toggle();
        this.break.reset();
        this.save();

        const peer = new SimplePeer();
        console.log(peer);

    }

    foul(points: number): void {
        this.players.toggle();
        this.players.addPoints(points);
        this.break.reset();
        this.save();
    }

    frame():void {
        var winner: Player = this.players.getFrameWinner();

        if (winner) {
            this.players.updateFrameWinner(winner);
            this.players.startNewFrame();
        } else {
            alert("Draw, need to re-spot black :D");
        }

        this.break.reset();
        this.save();
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

        console.log(this.states);
    }
}
