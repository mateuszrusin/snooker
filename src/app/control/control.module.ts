import {NgModule} from '@angular/core';
import {MainComponent} from './component/main/main.component';
import {ControlService} from "./service/control.service";
import {ServerService} from "./service/server.service";
import {ButtonModule} from "primeng/components/button/button";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        ButtonModule,
        SplitButtonModule,
        RouterModule.forChild([{ path: '', component: MainComponent }])
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        ControlService,
        ServerService,
    ],
})
export class ControlModule {
}
