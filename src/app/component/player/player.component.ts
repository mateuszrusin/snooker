import {Component, OnInit, Input} from '@angular/core';
import {Player} from "../../type/player";
import {State} from "../../type/state";

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

    @Input() state: State;
    @Input() player: Player;

    constructor() { }

    ngOnInit() {
    }



}
