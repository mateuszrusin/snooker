import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../service/client.service";
import {DataService} from "../../../shared/service/data.service";
import {GameService} from "../../../shared/service/game.service";
import {Break} from "../../../shared/type/break";
import {Observable} from "rxjs";
import {Result} from "../../../shared/type/result";
import {ResultService} from "../../../shared/service/result.service";
import {Player} from "../../../shared/type/player";
import {Config} from "../../../shared/data/config";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

    private result: Result;
    private readonly URL_IMG = Config.SERVER_URL + 'img/';
    private game: any;

    constructor(private resultService: ResultService, client: ClientService, game: GameService, route: ActivatedRoute) {
        this.result = resultService.result;

        route.params.subscribe(params => {
            client.create(params['id']);
            game.load(params['id'])
                .subscribe(
                    data => this.game = data,
                    err => {
                        console.log("LOAD ERROR:", err);
                    });
        });
    }

    ngOnInit() {
    }
}
