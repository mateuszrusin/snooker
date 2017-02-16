import { Component, OnInit } from '@angular/core';
import {TranslateService, TranslationChangeEvent} from "ng2-translate";
import {MenuItem} from "primeng/components/common/api";

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
    this.translate.getLangs().forEach((key) => {
      this.langs.push({label: key.toUpperCase(), command: () => this.translate.use(key)});
    });
  }
}
