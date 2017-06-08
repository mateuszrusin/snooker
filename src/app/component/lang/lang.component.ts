import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/components/common/api";
import {LANG} from "../../data/lang";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-lang',
  templateUrl: 'lang.component.html',
  styleUrls: ['lang.component.css']
})
export class LangComponent implements OnInit {

  langs: MenuItem[] = [];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang());
  }

  ngOnInit() {
      Object.keys(LANG).forEach((key) => {
          this.langs.push({
            label: LANG[key].iso,
            command: () => this.translate.use(key)
          });
      });
  }
}
