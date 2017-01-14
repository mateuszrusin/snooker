import {Component, OnInit} from "@angular/core";
import {Ball} from "../../type/ball";
import {BALLS} from "../../data/balls";
import {ActivePlayerService} from "./../../service/active-player/active-player.service.ts";
import {BreakService} from "../../service/break/break.service";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
    balls = BALLS;

    activePlayerService: ActivePlayerService;
    breakService: BreakService;

    constructor(activePlayerService:ActivePlayerService, breakService:BreakService) {
        this.activePlayerService = activePlayerService;
        this.breakService = breakService;
    }

    ngOnInit():void {

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
        // var winner = this.chooseFrameWinner();
        //
        // if (winner) {
        //     winner.frames++;
        //     this.startFrame();
        // } else {
        //     alert("Draw, need to re-spot black :D")
        //     this.resetBreak();
        // }
    }

    foul():void {
        this.enter();
        this.activePlayerService.addPoints(this.showFoulPrompt());
    }

    showFoulPrompt():number {
        return parseInt(prompt('Foul: '));
    }

    chooseFrameWinner():any {
        // switch (true) {
        //     case this.player1.points > this.player2.points:
        //         return this.player1;
        //     case this.player1.points < this.player2.points:
        //         return this.player2;
        //     default:
        //         return null;
        // }
    }

    startFrame():void {
        // this.player1.points = 0;
        // this.player2.points = 0;
        // this.resetBreak();
    }

}
