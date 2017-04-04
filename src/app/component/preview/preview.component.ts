import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

    private players = {};

    constructor(private http: Http) {
        this.players[1] = {
            name: null,
            photo: null
        }
        this.players[2] = {
            name: null,
            photo: null
        }
    }

    ngOnInit() {
    }

    onUpload(event, player) {
        this.players[player].photo = event.xhr.response;
    }

    onClick() {
        console.log(this.players);
        this.http.post(
            'http://localhost:3000/save',
            JSON.stringify(this.players)
        )
        .toPromise()
        .then(response => { return response.json() });
    }
}
