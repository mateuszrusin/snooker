import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Ball} from "../../type/ball";
import {BallsService} from "../../service/balls/balls.service";
import {MenuItem} from "primeng/primeng";
import {StateService} from "../../service/state/state.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ControlsComponent implements OnInit {
    balls: Ball[];
    fouls: MenuItem[];

    constructor(ballsService: BallsService, private state: StateService, route: ActivatedRoute) {
        this.balls = ballsService.getBalls();
        route.params.subscribe(params => {
            this.state.start(params['id']);
        });
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
        this.state.select(ball);
    }

    enter():void {
        navigator.vibrate(75);
        this.state.enter();
    }

    foul(points: number): void {
        navigator.vibrate(75);
        this.state.foul(points);
    }

    frame():void {
        navigator.vibrate(500);
        this.state.win();
    }

    back():void {
        navigator.vibrate(200);
        this.state.back();
    }
}
