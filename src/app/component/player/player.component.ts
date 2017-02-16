import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Player} from "../../type/player";

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PlayerComponent {

    @Input() player: Player;

}
