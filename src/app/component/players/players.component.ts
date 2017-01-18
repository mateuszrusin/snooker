import {Component, OnInit} from "@angular/core";
import {PlayersService} from "../../service/players/players.service";

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

    players: PlayersService;

    constructor(playersService:PlayersService) {
        this.players = playersService;
    }

    ngOnInit() {
        this.players.toggle();
    }
}
