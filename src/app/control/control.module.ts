import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './component/main/main.component';
import {ControlService} from "./service/control.service";
import {DataService} from "./service/data.service";
import {ServerService} from "./service/server.service";
import {Break} from "./service/break.service";
import {Result} from "./service/result.service";
import {AppTranslateModule} from "../app.translate";
import {ButtonModule} from "primeng/components/button/button";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";

@NgModule({
    imports: [
        CommonModule,
        AppTranslateModule,
        ButtonModule,
        SplitButtonModule
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        ControlService,
        DataService,
        ServerService,
        Break,
        Result
    ],
})
export class ControlModule {
}
