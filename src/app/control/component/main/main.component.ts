import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ControlService} from "../../service/control.service";
import {TranslateService} from "ng2-translate";
import {Ball} from "../../../type/ball";
import {BALLS} from "../../../data/balls";
import {MenuItem} from "primeng/primeng";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

    balls: Ball[] = BALLS;
    fouls: MenuItem[] = [];

    constructor(private control: ControlService, private translate: TranslateService, route: ActivatedRoute) {
        translate.setDefaultLang('en');
        translate.use(translate.getBrowserLang());
        route.params.subscribe(params => {
            this.control.init(params['id']);
        });
    }

    ngOnInit() {
        for (let i = 4; i <= 7; i++) {
            this.fouls.push(this.createFoulItem(i))
        }
    }

    select(ball: Ball): void {
        navigator.vibrate(50);
        this.control.select(ball);
    }

    enter(): void {
        navigator.vibrate(75);
        this.control.enter();
    }

    foul(points: number): void {
        navigator.vibrate(75);
        this.control.foul(points);
    }

    frame(): void {
        navigator.vibrate(500);
        this.control.frame();
    }

    back(): void {
        navigator.vibrate(200);
        this.control.back();
    }

    clear(): void {
        navigator.vibrate(1000);
        this.control.clear();
    }

    private createFoulItem(points: number): MenuItem {
        return {
            label: points.toString(),
            command: () => {
                this.control.foul(points)
            }
        }
    }
}
