import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../service/client.service";
import {GameService} from "../../../shared/service/game.service";
import {Result} from "../../../shared/type/result";
import {ResultService} from "../../../shared/service/result.service";
import {Game} from "../../../shared/type/game";
import {ThemeService} from "../../../shared/service/theme.service";

@Component({
    selector: 'display-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {

    result: Result;
    game: Game;

    constructor(result: ResultService, client: ClientService, game: GameService, route: ActivatedRoute, public theme: ThemeService) {

        route.params.subscribe(params => {
            client.create(params.id);
            game.load(params.id).subscribe(
                data => this.game = data,
                error => console.log("LOAD ERROR:", error),
                () => this.result = result.get()
            );
        });
    }
}
