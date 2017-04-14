import {Injectable, NgZone} from '@angular/core';
import {State} from "../../shared/type/state";
import {DataService} from "../../shared/service/data.service";
import {Config} from "../../shared/data/config";

@Injectable()
export class ClientService {

    private readonly type: string = 'C';
    private peer: any;

    constructor(private data: DataService, private ngZone: NgZone) {}

    create(id: any) {
        this.peer = new Peer(this.type + id, Config.PEER_PARAMS);
        this.peer.on('connection', this.connection);
    }

    connection = (conn) => {
        conn.on('data', this.receive);
    };

    receive = (data: State) => {
        this.ngZone.run(() => {
            this.data.set(data);
        })
    }
}
