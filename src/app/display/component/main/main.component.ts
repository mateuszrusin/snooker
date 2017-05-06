import {Component, ViewEncapsulation} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../service/client.service";
import {GameService} from "../../../shared/service/game.service";
import {Result} from "../../../shared/type/result";
import {ResultService} from "../../../shared/service/result.service";
import {Config} from "../../../shared/data/config";
import {Game} from "../../../shared/type/game";
import {User} from "../../../shared/type/user";

@Component({
    selector: 'display-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent {

    result: Result;
    frames: any;
    game: Game;

    constructor(private resultService: ResultService, client: ClientService, game: GameService, route: ActivatedRoute) {

        route.params.subscribe(params => {
            client.create(params['id']);
            game.load(params['id']).subscribe(
                data => {
                    this.game = data;
                    this.result = resultService.get();
                },
                err => {
                    console.log("LOAD ERROR:", err);
                }
            );
        });
    }
}
