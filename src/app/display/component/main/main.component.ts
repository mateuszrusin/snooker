import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../service/client.service";
import {DataService} from "../../../shared/service/data.service";
import {GameService} from "../../service/game.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

    private game: any;

    constructor(private data: DataService, client: ClientService, game: GameService, route: ActivatedRoute) {
        route.params.subscribe(params => {
            client.create(params['id']);
            game.load(params['id'])
                .subscribe(
                    data => this.game = data,
                    err => {
                        console.log("LOAD ERROR:", err);
                    });

            console.log(client);
        });
    }

    ngOnInit() {
        console.log(this.game);
    }
}
