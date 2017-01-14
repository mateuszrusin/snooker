import {Component, OnInit} from "@angular/core";
import {BreakService} from "../../service/break/break.service";

@Component({
    selector: 'app-break',
    templateUrl: './break.component.html',
    styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

    breakService: BreakService;

    constructor(breakService: BreakService) {
        this.breakService = breakService;
    }

    ngOnInit() {
        this.breakService.resetBreak();
    }
}
