import {Injectable} from '@angular/core';
import {Game} from "../type/game";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

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


    constructor(private http: HttpClient) {}

    public load(id: string): Observable<any> {
        return this.http
            .get(this.URL + id)
            .map((response: Response) => response.json());
    }

    public save(): Observable<any> {
        return this.http
            .post(
                this.URL,
                JSON.stringify(this.data),
                {headers: new HttpHeaders({'Content-Type': 'application/json'})}
            )
            .map((response: Response) => response.text());
    }

    public get(): Game {
        return this.data;
    }
}
