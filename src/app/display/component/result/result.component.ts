import {Component, Input} from "@angular/core";
import {Player} from "../../../shared/type/player";

@Component({
    selector: 'display-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent {

    @Input() player: Player;
    @Input() left: boolean;

}
