import {Component, ViewEncapsulation} from '@angular/core';
import {trigger, state, transition, style, animate} from "@angular/animations";
import {GameService} from "../../../shared/service/game.service";
import {Config} from "../../../shared/data/config";
import {Game} from "../../../shared/type/game";

@Component({
    selector: 'creator-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css'],
    encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('visibilityChanged', [
            state('1', style({opacity: 1})),
            state('0', style({opacity: 0, height: 0, display: 'none'})),
            transition('* => *', animate('.5s'))
        ])
    ],
})
export class MainComponent {

    visibility: string = '1';
    url: string = Config.APP_URL;
    id: string;
    data: Game;

    constructor(private game: GameService) {
        this.data = game.data;
    }

    save() {
        this.game.save().subscribe(
            id  => {
                this.id = id;
                this.visibility = '0';
            },
            error =>  null
        );
    }

}
