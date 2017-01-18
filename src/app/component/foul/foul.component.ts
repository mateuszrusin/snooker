import {Component, OnInit} from "@angular/core";
import {MenuItem} from "primeng/primeng";
import {Break} from "../../service/break/break.service";
import {PlayersService} from "../../service/players/players.service";

@Component({
    selector: 'app-control-foul',
    templateUrl: './foul.component.html',
    styleUrls: ['./foul.component.css']
})
export class FoulComponent implements OnInit {

    items: MenuItem[];

    private players: PlayersService;
    private break: Break;

    constructor(playersService: PlayersService, breakService: Break) {
        this.players = playersService;
        this.break = breakService;
    }

    ngOnInit() {
        this.items = [
            {label: '4', icon: 'fa-hand-paper-o', command: () => { this.foul(4) }},
            {label: '5', icon: 'fa-hand-paper-o', command: () => { this.foul(5) }},
            {label: '6', icon: 'fa-hand-paper-o', command: () => { this.foul(6) }},
            {label: '7', icon: 'fa-hand-paper-o', command: () => { this.foul(7) }},
        ];
    }

    foul(points: number): void {
        this.players.toggle();
        this.players.addPoints(points);
        this.break.reset();

        return;
    }
}
