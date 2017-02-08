import {Component} from "@angular/core";
import {Break} from "../../service/break/break.service";

@Component({
    selector: 'app-break',
    templateUrl: './break.component.html',
    styleUrls: ['./break.component.css']
})
export class BreakComponent {

    private break: Break;

    constructor(breakService: Break) {
        this.break = breakService;
    }
}
