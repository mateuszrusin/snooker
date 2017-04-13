import {Component, OnInit, Input} from '@angular/core';
import {Config} from "../../../shared/data/config";

@Component({
    selector: 'creator-player',
    templateUrl: 'player.component.html',
    styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {

    readonly URL_IMG = Config.SERVER_URL + 'img/';
    readonly URL_UPLOAD = Config.SERVER_URL + 'upload/';

    @Input() player: any;

    constructor() {
    }

    ngOnInit() {
    }

    onUpload(event) {
        this.player.photo = event.xhr.response;
    }

}
