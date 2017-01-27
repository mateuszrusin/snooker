import {Injectable, NgZone} from "@angular/core";
import {State} from "../../type/state";

@Injectable()
export class Result {

    private state: State = {
        player1: {
            points: 0,
            frames: 0,
            active: true
        },
        player2: {
            points: 0,
            frames: 0,
            active: false
        },
        break: {
            total: 0,
            order: []
        }
    };

    private peer;

    constructor(private ngZone: NgZone) {}

    start(id: any): void {
        this.peer = new Peer('RESULT_' + id, {key: 'peerjs', debug: true, host: '10.157.50.177', port: 9000, path: '/'});
        this.peer.on('connection', this.connection);
    }

    connection = (conn) => {
        conn.on('open', function() {});
        conn.on('data', this.receive);
    };

    receive = (data) => {
        this.ngZone.run(() => {
            this.state = data;
        })
    }
}
