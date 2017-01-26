import {Component, OnInit} from "@angular/core";
import {Ball} from "../../type/ball";
import {BallsService} from "../../service/balls/balls.service";
import {MenuItem} from "primeng/primeng";
import {StateService} from "../../service/state/state.service";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
    balls: Ball[];
    fouls: MenuItem[];

    constructor(ballsService: BallsService, private state: StateService) {
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
        this.state.select(ball);
    }

    enter():void {
        this.state.enter();
    }

    foul(points: number): void {
        this.state.foul(points);
    }

    frame():void {
        this.state.win();
    }

    back():void {
        this.state.back();
    }
}
