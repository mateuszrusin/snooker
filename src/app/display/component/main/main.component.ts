import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../service/client.service";
import {DataService} from "../../../control/service/data.service";
import {GameService} from "../../service/game.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

    constructor(private client: ClientService, private data: DataService, private game: GameService, route: ActivatedRoute) {
        route.params.subscribe(params => {
            this.client.create(params['id']);
            this.game.load(params['id']);
        });
    }

    ngOnInit() {
        setInterval(
            console.log(this.game.config), 10000
        );
    }
}
