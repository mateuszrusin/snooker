import {Component, OnInit} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use(translate.getBrowserLang());
    }

    ngOnInit(): void {

    }
}
