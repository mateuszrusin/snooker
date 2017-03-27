"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var FrameComponent = (function () {
    function FrameComponent(config) {
        this.frames = config.get('game.frames');
    }
    FrameComponent = __decorate([
        core_1.Component({
            selector: 'app-frame',
            templateUrl: './frame.component.html',
            styleUrls: ['./frame.component.css']
        })
    ], FrameComponent);
    return FrameComponent;
}());
exports.FrameComponent = FrameComponent;
