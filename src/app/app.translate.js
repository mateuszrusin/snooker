"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var lang_1 = require("./data/lang");
var ng2_translate_1 = require("ng2-translate");
var rxjs_1 = require("rxjs");
var LocalLoader = (function () {
    function LocalLoader() {
    }
    LocalLoader.prototype.getTranslation = function (lang) {
        return rxjs_1.Observable.of(lang_1.LANG[lang]);
    };
    return LocalLoader;
}());
exports.LocalLoader = LocalLoader;
var AppTranslateModule = (function () {
    function AppTranslateModule() {
    }
    AppTranslateModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_translate_1.TranslateModule.forRoot({
                    provide: ng2_translate_1.TranslateLoader,
                    useClass: LocalLoader
                })
            ],
            exports: [
                ng2_translate_1.TranslateModule
            ]
        })
    ], AppTranslateModule);
    return AppTranslateModule;
}());
exports.AppTranslateModule = AppTranslateModule;
