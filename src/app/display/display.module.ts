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
import { MenuComponent } from './component/menu/menu.component';
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {TieredMenuModule} from "primeng/components/tieredmenu/tieredmenu";
import {ThemeService} from "./service/theme.service";

@NgModule({
    imports: [
        SharedModule,
        TieredMenuModule,
        SplitButtonModule
    ],
    declarations: [
        MainComponent,
        BreakComponent,
        ResultComponent,
        RefereeComponent,
        PlayerComponent,
        FrameComponent,
        MenuComponent
    ],
    providers: [
        DataService,
        GameService,
        ResultService,
        ClientService,
        ThemeService
    ]
})
export class DisplayModule {
}
