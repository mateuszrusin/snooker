import {Component, OnInit} from "@angular/core";
import * as SimplePeer from 'simple-peer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    private peer;

    ngOnInit(): void {
        // //console.log(document.location.pathname.indexOf('control') > -1);
        // let peer = new SimplePeer({ initiator: document.location.pathname.indexOf('control') > -1, trickle: false })
        //
        // peer.on('error', function (err) { console.log('error', err) })
        //
        // peer.on('signal', function (data) {
        //     console.log('SIGNAL', JSON.stringify(data))
        //     document.querySelector('#outgoing').textContent = JSON.stringify(data)
        // })
        //
        // document.querySelector('form').addEventListener('submit', function (ev) {
        //     ev.preventDefault()
        //     peer.signal({id: 1})
        // })
        //
        // peer.on('connect', function () {
        //     console.log('CONNECT')
        //     peer.send('whatever' + Math.random())
        // })
        //
        // peer.on('data', function (data) {
        //     console.log('WYWSYŁAM: ' + data)
        // })

    }
}
