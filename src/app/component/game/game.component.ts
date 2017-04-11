import {Component, OnInit, Input} from "@angular/core";
import {State} from "../../shared/type/state";
import {Config} from "../../service/config/config.service";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    @Input() state: State;
    private game: any;
    private players: any;

    constructor(config: Config) {
        this.game = config.get('game');
        this.players = config.get('players');
    }

    ngOnInit() {

    }
}
