import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {Ball} from "../../type/ball";
import {BALLS} from "../../data/balls";
import {MenuItem} from "primeng/primeng";
import {Game} from "../../service/game/game.service";

@Component({
    selector: 'app-controls',
    templateUrl: './controls.component.html',
    styleUrls: ['./controls.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ControlsComponent implements OnInit {
    balls: Ball[] = BALLS;
    fouls: MenuItem[] = [];

    constructor(private game: Game) {}

    ngOnInit() {
        for (let i=4; i<=7; i++) {
            this.fouls.push(this.createFoulItem(i))
        }
    }

    select(ball:Ball): void {
        navigator.vibrate(50);
        this.game.select(ball);
    }

    enter(): void {
        navigator.vibrate(75);
        this.game.enter();
    }

    foul(points: number): void {
        navigator.vibrate(75);
        this.game.foul(points);
    }

    frame(): void {
        navigator.vibrate(500);
        this.game.frame();
    }

    back(): void {
        navigator.vibrate(200);
        this.game.back();
    }

    clear(): void {
        navigator.vibrate(1000);
        this.game.clear();
    }

    private createFoulItem(points: number): MenuItem {
        return {
            label: points.toString(),
            icon: 'fa-hand-paper-o',
            command: () => { this.foul(points) }
        }
    }
}
