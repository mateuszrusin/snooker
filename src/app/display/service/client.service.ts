import {Injectable, NgZone} from '@angular/core';
import {State} from "../../type/state";
import {DataService} from "../../control/service/data.service";

@Injectable()
export class ClientService {

    readonly type: string = 'C';
    peer: any;

    constructor(private data: DataService, private ngZone: NgZone) {
    }

    create(id: any) {
        this.peer = new Peer(this.type + id, {host: 'localhost', port: 9000, path: '/'});
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
