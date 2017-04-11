import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from "./service/data.service";
import {ResultService} from "./service/result.service";
import {BreakService} from "./service/break.service";
import {GameService} from "./service/game.service";
import {AppTranslateModule} from "../app.translate";

@NgModule({
    imports: [
        CommonModule,
        AppTranslateModule
    ],
    providers: [
        DataService,
        ResultService,
        BreakService,
        GameService
    ],
    exports: [
        AppTranslateModule
    ]
})
export class SharedModule {
}
