import {Injectable} from '@angular/core';
import {State} from "../../shared/type/state";
import {Config} from "../../shared/data/config";

@Injectable()
export class ServerService  {

    private peer: any;
    private dest: string = 'C';
    private readonly type: string = 'S';

    public create(id: string): void {
        this.peer = new Peer(this.type + id, Config.PEER_PARAMS);
        this.dest += id;
    }

    public send(data: State): void {
        let conn = this.peer.connect(this.dest);
        conn.on('open', () => conn.send(data));
    }
}
