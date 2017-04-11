import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './component/main/main.component';
import {ControlService} from "./service/control.service";
import {DataService} from "../shared/service/data.service";
import {ServerService} from "./service/server.service";
import {BreakService} from "../shared/service/break.service";
import {ResultService} from "../shared/service/result.service";
import {AppTranslateModule} from "../app.translate";
import {ButtonModule} from "primeng/components/button/button";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
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
        BreakService,
        ResultService
    ],
})
export class ControlModule {
}
