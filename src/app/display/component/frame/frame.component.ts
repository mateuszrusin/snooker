import {Component, Input} from '@angular/core';

@Component({
    selector: 'display-frame',
    templateUrl: './frame.component.html',
    styleUrls: ['./frame.component.css']
})
export class FrameComponent {

    @Input() frames: number;
    @Input() player1: number;
    @Input() player2: number;
}
