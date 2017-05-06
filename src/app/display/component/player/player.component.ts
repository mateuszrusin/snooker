import {Component, Input} from '@angular/core';
import {User} from "../../../shared/type/user";
import {Config} from "../../../shared/data/config";

@Component({
    selector: 'display-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent {

    @Input() player: User;

    public photo(): string {
        if (this.player.photo) {
            return Config.SERVER_URL + 'img/' + this.player.photo;
        }

        return Config.SERVER_URL + 'asset/player.jpg';
    }
}
