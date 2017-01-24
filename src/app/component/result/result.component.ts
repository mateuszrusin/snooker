import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    private peer;

    constructor() { }

    ngOnInit() {
        this.peer = new Peer('RESULT', {key: 'd4njqqkyflz69a4i'});

        this.peer.on('connection', function(conn) {
            conn.on('open', function() {
                // Receive messages
                conn.on('data', function(data) {
                    console.log('Received', data);
                });
            });
        });
    }

}
