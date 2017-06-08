import {Component, OnInit} from '@angular/core';
import {Result} from "../../service/result/result.service";

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    popup: boolean = false;

    constructor(private result: Result) {

    }

    ngOnInit() {
    }

    show(): void {
        this.popup = true;
    }

    close(): void {
        this.popup = false;
    }

}
