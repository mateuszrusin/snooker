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

    private peer;
    private conn;
    
    private state: StateService;

    constructor(ballsService: BallsService, stateService: StateService) {
        this.balls = ballsService.getBalls();
        this.state = stateService;
    }

    ngOnInit() {
        this.fouls = [
            {label: '4', icon: 'fa-hand-paper-o', command: () => { this.foul(4) }},
            {label: '5', icon: 'fa-hand-paper-o', command: () => { this.foul(5) }},
            {label: '6', icon: 'fa-hand-paper-o', command: () => { this.foul(6) }},
            {label: '7', icon: 'fa-hand-paper-o', command: () => { this.foul(7) }},
        ];

        this.peer = new Peer('CONTROL', {key: 'd4njqqkyflz69a4i'});

        this.peer.on('open', function(id) {

        });
    }

    select(ball:Ball):void {
        this.state.select(ball);

        var conn = this.peer.connect('RESULT');

        conn.on('open', function() {
            conn.send(ball);
        });
    }

    enter():void {
        this.state.enter();
    }

    foul(points: number): void {
        this.state.foul(points);
    }

    frame():void {
        this.state.frame();
    }

    back():void {
        this.state.back();
    }
}
