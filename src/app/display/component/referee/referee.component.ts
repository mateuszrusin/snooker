import {Component, Input} from '@angular/core';
import {User} from "../../../shared/type/user";
import {Config} from "../../../shared/data/config";

@Component({
    selector: 'display-referee',
    templateUrl: './referee.component.html',
    styleUrls: ['./referee.component.css']
})
export class RefereeComponent {

    @Input() referee: User;

    public photo(): string {
        if (this.referee.photo) {
            return Config.SERVER_URL + 'img/' + this.referee.photo;
        }

        return Config.SERVER_URL + 'asset/referee.jpg';
    }
}
