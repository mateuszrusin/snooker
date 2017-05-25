import {Component, ViewEncapsulation} from '@angular/core';
import {GameService} from "../../../shared/service/game.service";
import {Config} from "../../../shared/data/config";
import {Game} from "../../../shared/type/game";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'creator-main',
    templateUrl: 'main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent {

    id: string;
    data: Game;
    busy: Subscription;

    constructor(private game: GameService) {
        this.data = game.data;
    }

    isValid(): boolean {
        if (this.data.player1.name && this.data.player2.name) {
            return this.data.player1.name.trim().length > 0 && this.data.player2.name.trim().length > 0;
        }

        return false;
    }

    save() {
        this.busy = this.game.save().subscribe(
            id  => {
                this.id = id;
            },
            error =>  null
        );
    }

    go(): void {
        document.location.href = this.link('display');
    }


    link(type: string): string {
        return Config.APP_URL + type + '/' + this.id;
    }

}
