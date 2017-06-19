import {Component, OnInit} from '@angular/core';
import {FoulService} from "../../../shared/service/foul.service";
import {Foul} from "../../../shared/type/foul";

@Component({
    selector: 'display-foul',
    templateUrl: './foul.component.html',
    styleUrls: ['./foul.component.scss']
})
export class FoulComponent {

    foul: Foul;

    constructor(foul: FoulService) {
        this.foul = foul.get();
    }
}
