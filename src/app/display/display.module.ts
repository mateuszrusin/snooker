import {NgModule} from '@angular/core';
import {MainComponent} from './component/main/main.component';
import {ClientService} from "./service/client.service";
import {DataService} from "../shared/service/data.service";
import {SharedModule} from "../shared/shared.module";
import {BreakComponent} from "./component/break/break.component";
import {GameService} from "../shared/service/game.service";
import {ResultService} from "../shared/service/result.service";
import { ResultComponent } from './component/result/result.component';
import { RefereeComponent } from './component/referee/referee.component';
import { PlayerComponent } from './component/player/player.component';
import { FrameComponent } from './component/frame/frame.component';

@NgModule({
    imports: [
        SharedModule
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
        GameService,
        ResultService,
        ClientService
    ]
})
export class DisplayModule {
}
