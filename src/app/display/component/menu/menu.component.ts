import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/components/common/api";
import {TranslateService, TranslationChangeEvent} from "ng2-translate";
import {ThemeService} from "../../service/theme.service";

@Component({
  selector: 'display-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    langs: MenuItem[] = [];
    items: MenuItem[] = [];
    themes: MenuItem[] = [];

    constructor(private translate: TranslateService, private theme: ThemeService) {
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

        this.theme.all.forEach((name) => {
           this.themes.push({label: name, icon: 'fa-eye', command: () => this.theme.set(name)});
        });
    }

    private menu(): void {
        this.items = [
            {
                label: this.translate.instant('language'),
                icon: 'fa-commenting',
                items: this.langs
            },
            {
                label: this.translate.instant('theme'),
                icon: 'fa-eye',
                items: this.themes
            }
        ]
    }
}
