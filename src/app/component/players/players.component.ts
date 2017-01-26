import {Component, OnInit, Input} from "@angular/core";
import {PlayersService} from "../../service/players/players.service";
import {State} from "../../type/state";

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

    @Input() state: State;

    constructor(private game: PlayersService) {}

    ngOnInit() {
        
    }
}
