import {Component, OnInit, Input} from "@angular/core";
import {BreakService} from "../../../shared/service/break.service";
import {Break} from "../../../shared/type/break";

@Component({
    selector: 'display-break',
    templateUrl: 'break.component.html',
    styleUrls: ['break.component.css']
})
export class BreakComponent implements OnInit {

    @Input() position: string;
    break: Break;

    constructor(breakService: BreakService) {
        breakService.load().subscribe(data => this.break = data)
    }

    ngOnInit() {

    }
}
