import {Component, OnInit} from "@angular/core";
import {Ball} from "../../type/ball";
import {ActivePlayerService} from "./../../service/active-player/active-player.service.ts";
import {BreakService} from "../../service/break/break.service";
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

    activePlayerService: ActivePlayerService;
    breakService: BreakService;
    ballsService: BallsService;
    playersService: PlayersService;

    constructor(activePlayerService:ActivePlayerService, breakService:BreakService, ballsService: BallsService, playersService: PlayersService) {
        this.activePlayerService = activePlayerService;
        this.breakService = breakService;
        this.ballsService = ballsService;
        this.playersService = playersService;
    }

    ngOnInit():void {
        this.balls = this.ballsService.getBalls();
    }

    select(ball:Ball):void {
        this.breakService.updateBreak(ball);
        this.activePlayerService.addPoints(ball.points);
    }

    enter():void {
        this.activePlayerService.togglePlayer();
        this.breakService.resetBreak();
    }

    frame():void {
        var winner:Player = this.playersService.getFrameWinner();

        if (winner) {
            this.playersService.updateFrameWinner(winner);
            this.playersService.startNewFrame();
        } else {
            alert("Draw, need to re-spot black :D");
        }

        this.breakService.resetBreak();
    }

    foul():void {
        this.enter();
        this.activePlayerService.addPoints(this.showFoulPrompt());
    }

    showFoulPrompt():number {
        return parseInt(prompt('Foul: '));
    }
}
