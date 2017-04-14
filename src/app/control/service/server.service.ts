import {Injectable} from '@angular/core';
import {State} from "../../shared/type/state";
import {Config} from "../../shared/data/config";

@Injectable()
export class ServerService  {

    private peer: any;
    private readonly type: string = 'S';
    private dest: string = 'C';

    create(id: any) {
        this.peer = new Peer(this.type + id, Config.PEER_PARAMS);
        this.dest += id;
    }

    send(data: State): void {
        if (data) {
            let conn = this.peer.connect(this.dest);

            conn.on('open', () => {
                conn.send(data);
            });
        }
    }
}
