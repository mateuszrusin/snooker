import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class ConfigService {

    private config: Object;

    constructor(private http:Http) {}

    get(key: any) {
        return this.getConfig()[key];
    }

    getConfig() {
        // return this.http.get('./app/config/config.json').map(this.extractData);
        return {
            "players": {
                "player1": {
                    "name": "Bronisław Maliszewski",
                    "start": true
                },
                "player2": {
                    "name": "Mieczysław Wiśniewski",
                    "start": false
                }
            }
        }
    }

}
