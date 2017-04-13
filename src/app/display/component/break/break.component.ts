import {Component, OnInit, Input} from "@angular/core";
import {BreakService} from "../../../shared/service/break.service";
import {Break} from "../../../shared/type/break";

@Component({
    selector: 'display-break',
    templateUrl: 'break.component.html',
    styleUrls: ['break.component.css']
})
export class BreakComponent implements OnInit {

    private break: Break;

    constructor(breakService: BreakService) {
        this.break = breakService.get();
    }

    ngOnInit() {

    }
}
