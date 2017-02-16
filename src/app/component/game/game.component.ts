import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Config} from "../../service/config/config.service";
import {Result} from "../../service/result/result.service";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GameComponent implements OnInit {

    private config: any;

    constructor(private result: Result, config: Config) {
        this.config = config.get('game');
    }

    ngOnInit() {

    }
}
