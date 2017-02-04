import { Component, OnInit } from '@angular/core';
import {TranslateService} from "ng2-translate";
import {MenuItem} from "primeng/components/common/api";
import {LANG} from "../../data/lang";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    langs: MenuItem[] = [];

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }

    ngOnInit() {
        Object.keys(LANG).forEach((key) => {
            this.langs.push({label: key.toUpperCase(), command: () => this.translate.use(key)});
        });
    }
}
