import { Component, OnInit } from '@angular/core';
import {TranslateService, TranslationChangeEvent} from "ng2-translate";
import {MenuItem} from 'primeng/primeng';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    langs: MenuItem[] = [];
    items: MenuItem[] = [];

    constructor(private translate: TranslateService) {
        translate.setDefaultLang('en');

        translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
            this.menu();
        });

        translate.use(translate.getBrowserLang());
    }

    ngOnInit() {
        this.translate.getLangs().forEach((key) => {
            this.langs.push({label: key.toUpperCase(), command: () => this.translate.use(key)});
        });
    }

    private menu(): void {
        this.items = [
            {
                label: this.translate.instant('language'),
                icon: 'fa-commenting',
                items: this.langs
            }
        ]
    }
}
