import {Component, OnInit} from "@angular/core";
import {Ball} from "../../type/ball";
import {Break} from "../../service/break/break.service";
import {BallsService} from "../../service/balls/balls.service";
import {PlayersService} from "../../service/players/players.service";
import {Player} from "../../type/player";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
    balls: Ball[];

    private break: Break;
    private players: PlayersService;

    constructor(breakService:Break, ballsService: BallsService, playersService: PlayersService) {
        this.balls = ballsService.getBalls();
        this.break = breakService;
        this.players = playersService;
    }

    ngOnInit() {

    }

    select(ball:Ball):void {
        this.break.update(ball);
        this.players.addPoints(ball.points);
    }

    enter():void {
        this.players.toggle();
        this.break.reset();
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
    }
}
