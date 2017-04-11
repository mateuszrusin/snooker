import {Component, OnInit, Input} from "@angular/core";
import {BreakService} from "../../shared/service/break.service";

@Component({
    selector: 'app-break',
    templateUrl: './break.component.html',
    styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

    @Input() break: BreakService;

    constructor(breakService: BreakService) {
        //this.break = breakService;
    }

    ngOnInit() {
        //this.break.reset();
    }
}
