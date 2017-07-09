import {Component} from '@angular/core';
import {Config} from "../../service/config/config.service";

@Component({
    selector: 'app-referee',
    templateUrl: './referee.component.html',
    styleUrls: ['./referee.component.css']
})
export class RefereeComponent  {

    referee: any;

    constructor(config: Config) {
        this.referee = config.get('game.referee');
    }


}
