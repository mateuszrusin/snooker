import {Component, OnInit, Input} from "@angular/core";
import {Break} from "../../control/service/break.service";

@Component({
    selector: 'app-break',
    templateUrl: './break.component.html',
    styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

    @Input() break: Break;
    
    constructor(breakService: Break) {
        //this.break = breakService;
    }

    ngOnInit() {
        //this.break.reset();
    }
}
