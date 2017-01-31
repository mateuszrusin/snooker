import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Ball} from "../../type/ball";
import {BallsService} from "../../service/balls/balls.service";
import {MenuItem} from "primeng/primeng";
import {ActivatedRoute} from "@angular/router";
import {GameService} from "../../service/game/game.service";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ControlsComponent implements OnInit {
    balls: Ball[];
    fouls: MenuItem[];

    constructor(ballsService: BallsService, private game: GameService, route: ActivatedRoute) {
        this.balls = ballsService.getBalls();
    }

    ngOnInit() {
        this.fouls = [
            {label: '4', icon: 'fa-hand-paper-o', command: () => { this.foul(4) }},
            {label: '5', icon: 'fa-hand-paper-o', command: () => { this.foul(5) }},
            {label: '6', icon: 'fa-hand-paper-o', command: () => { this.foul(6) }},
            {label: '7', icon: 'fa-hand-paper-o', command: () => { this.foul(7) }},
        ];
    }

    select(ball:Ball):void {
        navigator.vibrate(50);
        this.game.select(ball);
    }

    enter():void {
        navigator.vibrate(75);
        this.game.enter();
    }

    foul(points: number): void {
        navigator.vibrate(75);
        this.game.foul(points);
    }

    frame():void {
        navigator.vibrate(500);
        this.game.win();
    }

    back():void {
        navigator.vibrate(200);
        this.game.back();
    }
}
