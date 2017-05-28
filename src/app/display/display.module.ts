import {NgModule} from '@angular/core';
import {MainComponent} from './component/main/main.component';
import {ClientService} from "./service/client.service";
import {DataService} from "../shared/service/data.service";
import {SharedModule} from "../shared/shared.module";
import {BreakComponent} from "./component/break/break.component";
import {ResultService} from "../shared/service/result.service";
import { ResultComponent } from './component/result/result.component';
import { RefereeComponent } from './component/referee/referee.component';
import { PlayerComponent } from './component/player/player.component';
import { FrameComponent } from './component/frame/frame.component';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild([{ path: '', component: MainComponent }])
    ],
    declarations: [
        MainComponent,
        BreakComponent,
        ResultComponent,
        RefereeComponent,
        PlayerComponent,
        FrameComponent
    ],
    providers: [
        DataService,
        ResultService,
        ClientService
    ]
})
export class DisplayModule {
}
