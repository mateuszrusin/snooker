import {Injectable} from '@angular/core';

@Injectable()
export class ServerService  {

    peer: any;
    private readonly type: string = 'S';
    private dest: string = 'C';

    create(id: any) {
        this.peer = new Peer(this.type + id, {host: 'localhost', port: 9000, path: '/'});
        this.dest += id;
        console.log(this.peer);
    }

    send(data: any): void {
        let conn = this.peer.connect(this.dest);

        conn.on('open', () => {
            conn.send(data);
        });
    }
}
