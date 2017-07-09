import {Component, Input} from '@angular/core';
import {State} from "../../type/state";

@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.css']
})
export class FactorComponent {

    constructor() { }

    @Input() state: State;

    public beers(): number[] {

        let beers = 0;

        switch (this.state.factor) {
            case 1:
                beers = 0;
                break;
            case 1.5:
                beers = 3;
                break;
            case 2:
                beers = 5;
                break;
            case 2.5:
                beers = 8;
                break;
            case 3:
                beers = 10;
                break;
            case 3.5:
                beers = 12;
                break;
            case 4:
                beers = 15;
                break;
            default:
                beers = 16;
                break;
        }

        return new Array(beers);
    }

}
