import {Component, OnInit} from "@angular/core";
import {Break} from "../../service/break/break.service";

@Component({
    selector: 'app-break',
    templateUrl: './break.component.html',
    styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

    private break: Break;
    
    constructor(breakService: Break) {
        this.break = breakService;
    }

    ngOnInit() {
        this.break.reset();



    }
}
