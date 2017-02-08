import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Player} from "../../type/player";
import {State} from "../../type/state";

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {

    @Input() state: State;
    @Input() player: Player;

}
