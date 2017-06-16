import {Component, OnInit} from '@angular/core';
import {Config} from "../../service/config/config.service";
import {Player} from "app/type/player";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    popup: boolean = false;
    player1: Player;
    player2: Player;

    constructor(config: Config) {
        this.player1 = config.get('game.player1');
        this.player2 = config.get('game.player2');
    }

    ngOnInit() {
    }

    show(): void {
        this.popup = true;
    }

    close(): void {
        this.popup = false;
    }

}
