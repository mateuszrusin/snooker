import {Injectable} from '@angular/core';
import {State} from "../../shared/type/state";

@Injectable()
export class ServerService  {

    peer: any;
    private readonly type: string = 'S';
    private dest: string = 'C';

    create(id: any) {
        this.peer = new Peer(this.type + id, {host: '0.0.0.0', port: 3000, path: '/peer', debug: 3});
        this.dest += id;
    }

    send(data: State): void {
        let conn = this.peer.connect(this.dest);

        conn.on('open', () => {
            conn.send(data);
        });
    }
}
