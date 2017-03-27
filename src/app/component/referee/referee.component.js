"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var RefereeComponent = (function () {
    function RefereeComponent(config) {
        this.referee = config.get('game.referee');
    }
    RefereeComponent = __decorate([
        core_1.Component({
            selector: 'app-referee',
            templateUrl: './referee.component.html',
            styleUrls: ['./referee.component.css']
        })
    ], RefereeComponent);
    return RefereeComponent;
}());
exports.RefereeComponent = RefereeComponent;
