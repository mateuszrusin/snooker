import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Game} from "../type/game";

@Injectable()
export class GameService {

    private readonly URL: string = '/api/game/';

    private data: Game = {
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
                JSON.stringify(this.data),
                new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})})
            )
            .map(response => response.text());
    }

    public get(): Game {
        return this.data;
    }
}
