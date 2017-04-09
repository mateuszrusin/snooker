import {Injectable, NgZone} from '@angular/core';
import {State} from "../../type/state";
import {DataService} from "./data.service";

@Injectable()
export class ClientService {

    readonly type: string = 'C';
    peer: any;

    constructor(private data: DataService, private ngZone: NgZone) {
    }

    create(id: any) {
        this.peer = new Peer(this.type + id, this.type);
        this.peer.on('connection', this.connection);
    }

    connection = (conn) => {
        conn.on('open', function() {});
        conn.on('data', this.receive);
    };

    receive = (data: State) => {
        this.ngZone.run(() => {
            this.data.set(data);
        })
    }
}
