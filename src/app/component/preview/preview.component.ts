import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {QRCodeComponent} from 'ng2-qrcode'

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

    private players = {};

    constructor(private http: Http) {
        this.players[0] = {
            name: null,
            photo: null
        }
        this.players[1] = {
            name: null,
            photo: null
        }
    }

    ngOnInit() {
    }

    onClick() {
        this.http.post(
            'http://localhost:3000/save',
            JSON.stringify(this.players)
        )
        .toPromise()
        .then(response => { alert(response) });
    }
}
