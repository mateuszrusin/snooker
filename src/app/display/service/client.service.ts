import {Injectable, NgZone} from '@angular/core';
import {State} from "../../shared/type/state";
import {DataService} from "../../shared/service/data.service";

@Injectable()
export class ClientService {

    readonly type: string = 'C';
    peer: any;

    constructor(private data: DataService, private ngZone: NgZone) {
    }

    create(id: any) {
        this.peer = new Peer(this.type + id, {host: '0.0.0.0', port: 9000, path: '/', debug: 3});
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
