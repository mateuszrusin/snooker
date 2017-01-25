import {Injectable, NgZone} from "@angular/core";

@Injectable()
export class Result {

    data: any = { points: 123};

    private peer;

    constructor(private ngZone: NgZone) {
        this.peer = new Peer('RESULT', {key: 'd4njqqkyflz69a4i'});

        this.peer.on('connection', this.connection);
    }

    connection = (conn) => {
        conn.on('open', function() {

        });
        conn.on('data', this.receive);
    }

    receive = (data) => {
        this.ngZone.run(() => {
            console.log(this.data);
            this.data = data;
            console.log(this.data);
        })
    }
}
