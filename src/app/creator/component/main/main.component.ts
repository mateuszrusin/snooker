import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {QRCodeComponent} from 'ng2-qrcode';
import {trigger, state, transition, style, animate} from "@angular/animations";

@Component({
    selector: 'creator-main',
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.css'],
    animations: [
        trigger('visibilityChanged', [
            state('1', style({opacity: 1})),
            state('0', style({opacity: 0, height: 0})),
            transition('* => *', animate('.5s'))
        ])
    ],
})
export class MainComponent implements OnInit {

    private id;
    private players = {};

    private visibility = '1';

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
        .then(response => {
            this.id = response.text();
            this.visibility = '0';
        });
    }

}
