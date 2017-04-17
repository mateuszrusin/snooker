import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Config} from "../data/config";

@Injectable()
export class GameService {

    public data = {
        player1: {
            name: null,
            photo: null
        },
        player2: {
            name: null,
            photo: null
        },
        referee: {
            name: null,
            photo: null
        },
        frames: 1,
        title: ""
    };

    private readonly URL: string = Config.SERVER_URL + 'game/';

    constructor(private http: Http) {}

    public load(id: string): Observable<any> {
        return this.http
            .get(this.URL + id)
            .map(response => response.json());
    }

    public save(): Observable<any> {
        return this.http
            .post(
                this.URL,
                JSON.stringify(this.data)
            )
            .map(response => {
                return response.text();
            })
    }

}
