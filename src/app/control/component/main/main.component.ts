import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import {ControlService} from "../../service/control.service";
import {Ball} from "../../../shared/type/ball";
import {BALLS} from "../../../shared/data/balls";
import {ActivatedRoute} from "@angular/router";
import {MenuItem} from "primeng/components/common/api";
import {ThemeService} from "../../../shared/service/theme.service";
import {FOULS} from "../../../shared/data/fouls";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

    balls: Ball[] = BALLS;
    fouls: MenuItem[] = [];

    constructor(route: ActivatedRoute, private control: ControlService, public theme: ThemeService) {
        route.params.subscribe(params => {
            this.control.init(params.id);
        });
    }

    ngOnInit() {
        for (let i in FOULS) {
            this.fouls.push(this.createFoulItem(Number(i)))
        }
    }

    select(ball: Ball): void {
        navigator.vibrate(50);
        this.control.call('select', ball);
    }

    enter(): void {
        navigator.vibrate(75);
        this.control.call('enter');
    }

    foul(points: number): void {
        navigator.vibrate(75);
        this.control.call('fine', points);
    }

    frame(): void {
        navigator.vibrate(500);
        this.control.call('frame');
    }

    back(): void {
        navigator.vibrate(200);
        this.control.back();
    }

    private createFoulItem(points: number): MenuItem {
        return {
            label: points.toString(),
            command: () => this.control.call('fine', points)
        }
    }
}
