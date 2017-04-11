"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var lang_1 = require(".././lang");
var LangComponent = (function () {
    function LangComponent(translate) {
        this.translate = translate;
        this.langs = [];
        translate.setDefaultLang('en');
        translate.use(translate.getBrowserLang());
    }
    LangComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object.keys(lang_1.LANG).forEach(function (key) {
            _this.langs.push({
                label: lang_1.LANG[key].iso,
                command: function () { return _this.translate.use(key); }
            });
        });
    };
    LangComponent = __decorate([
        core_1.Component({
            selector: 'app-lang',
            templateUrl: 'lang.component.html',
            styleUrls: ['lang.component.css']
        })
    ], LangComponent);
    return LangComponent;
}());
exports.LangComponent = LangComponent;
