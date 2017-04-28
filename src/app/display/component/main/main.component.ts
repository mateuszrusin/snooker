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
    styleUrls: ['./main.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent {

    result: Result;
    game: Game;

    constructor(private resultService: ResultService, client: ClientService, game: GameService, route: ActivatedRoute) {

        route.params.subscribe(params => {
            this.result = resultService.get();
            client.create(params['id']);
            game.load(params['id']).subscribe(
                data => this.game = data,
                err => {
                    console.log("LOAD ERROR:", err);
                }
            );
        });
    }

    photo(user: User): string {
        if (user.photo) {
            return Config.SERVER_URL + 'img/' + user.photo;
        }

        return Config.SERVER_URL + 'asset/player.jpg';
    }
}
