import {NgModule} from '@angular/core';
import {MainComponent} from './component/main/main.component';
import {ClientService} from "./service/client.service";
import {SharedModule} from "../shared/shared.module";
import {BreakComponent} from "./component/break/break.component";
import { ResultComponent } from './component/result/result.component';
import { RefereeComponent } from './component/referee/referee.component';
import { PlayerComponent } from './component/player/player.component';
import { FrameComponent } from './component/frame/frame.component';
import {RouterModule} from "@angular/router";
import { FoulComponent } from './component/foul/foul.component';

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
        FrameComponent,
        FoulComponent
    ],
    providers: [
        ClientService
    ]
})
export class DisplayModule {
}
