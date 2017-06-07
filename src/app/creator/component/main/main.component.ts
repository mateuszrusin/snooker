import {Component, ViewEncapsulation} from '@angular/core';
import {GameService} from "../../../shared/service/game.service";
import {Config} from "../../../shared/data/config";
import {Game} from "../../../shared/type/game";
import {Subscription} from "rxjs/Subscription";
import {User} from "../../../shared/type/user";

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
        this.data = game.get();
    }

    public save() {
        this.busy = this.game.save().subscribe(
            id  => this.id = id,
            error => console.log("SAVE ERROR:", error),
        );
    }

    public go(): void {
        document.location.href = this.link('display');
    }

    public link(type: string): string {
        return Config.APP_URL + type + '/' + this.id;
    }

    public isValid(): boolean {
        return this.hasName(this.data.player1) && this.hasName(this.data.player2);
    }

    private hasName(player: User): boolean {
        return player.name && player.name.trim().length > 0;
    }
}
