import {Component} from "@angular/core";
import {BreakService} from "../../../shared/service/break.service";
import {Break} from "../../../shared/type/break";

@Component({
    selector: 'display-break',
    templateUrl: 'break.component.html',
    styleUrls: ['./break.component.scss']
})
export class BreakComponent {

    constructor(private brk: BreakService) {}

    get break(): Break {
        return this.brk.get();
    }

    size(): string {
        const count = this.break.order.length;

        switch (true) {
            case count > 30:
                return 's';
            case count > 20:
                return 'm';
            case count > 15:
                return 'l';
            case count > 5:
                return 'xl';
            default:
                return 'xxl';
        }
    }
}
