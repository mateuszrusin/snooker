import {Component} from "@angular/core";
import {TranslateService} from "ng2-translate";

@Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>'
})

export class AppComponent {

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use(translate.getBrowserLang());
    }
}
