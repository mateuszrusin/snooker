import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {ActivePlayerService} from "../../service/active-player/active-player.service";
import {BreakService} from "../../service/break/break.service";

@Component({
    selector: 'app-control-foul',
    templateUrl: './foul.component.html',
    styleUrls: ['./foul.component.css']
})
export class FoulComponent implements OnInit {

    items: MenuItem[];

    activePlayerService: ActivePlayerService;
    breakService: BreakService;

    constructor(activePlayerService: ActivePlayerService, breakService: BreakService) {
        this.activePlayerService = activePlayerService;
        this.breakService = breakService;
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
        this.activePlayerService.togglePlayer();
        this.activePlayerService.addPoints(points);
        this.breakService.resetBreak();

        return;
    }
}
