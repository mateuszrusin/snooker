import {NgModule} from '@angular/core';
import {MainComponent} from './component/main/main.component';
import {ControlService} from "./service/control.service";
import {DataService} from "../shared/service/data.service";
import {ServerService} from "./service/server.service";
import {BreakService} from "../shared/service/break.service";
import {ResultService} from "../shared/service/result.service";
import {ButtonModule} from "primeng/components/button/button";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
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
