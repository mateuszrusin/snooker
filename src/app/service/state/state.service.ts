import { Injectable } from '@angular/core';
import {Break} from "../break/break.service";
import {Players} from "../players/players.service";
import {Ball} from "../../type/ball";
import {Player} from "../../type/player";
import {State} from "../../type/state";
import {Frame} from "../frame/frame.service";
import {Config} from "../config/config.service";

@Injectable()
export class StateService  {

    private peer: any;
    private dest: string;
    private break: Break;
    private states: State[] = [];

    constructor(breakService: Break, private players: Players, private frame: Frame, private config: Config) {
        this.break = breakService;
    }

    start(id: any): void {
        this.peer = new Peer('CONTROL_' + id, this.config.get('env.peer'));
        this.dest = 'RESULT_' + id;
    }

    select(ball: Ball): void {
        this.break.update(ball);
        this.players.points(ball.points);
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
        this.players.points(points);
        this.break.reset();
        this.save();
        this.send();
    }

    win(): void {
        const winner: Player = this.frame.winner();

        if (winner) {
            this.frame.update(winner);
            this.frame.start();
        } else {
            alert("Draw, need to re-spot black :D");
        }

        this.break.reset();
        this.save();
        this.send();
    }

    back(): void {
        this.states.pop();

        const current = this.current();

        if (current) {
            this.players.player1 = current.player1;
            this.players.player2 = current.player2;

            this.break.total = current.break.total;
            this.break.order = current.break.order.slice();
            this.send();
        }
    }

    private save(): void {
        this.states.push({
            player1: Object.assign({}, this.players.player1),
            player2: Object.assign({}, this.players.player2),
            break: {
                total: this.break.total,
                order: this.break.order.slice()
            }
        })
    }

    private send(): void {
        let state = this.current();
        let conn = this.peer.connect(this.dest);

        conn.on('open', () => {
            conn.send(state);
        });
    }

    private current(): State {
        return this.states[this.states.length-1];
    }
}
