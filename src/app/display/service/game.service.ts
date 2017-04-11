import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class GameService {

    private readonly file: string = 'http://localhost:3000/game/';

    constructor(private http: Http) {}

    public load(id: string): Observable<any> {
        return this.http.get(this.file + id)
            .map(response => response.json());
    }

}
