import {NgModule} from '@angular/core';
import {MainComponent} from './component/main/main.component';
import {ClientService} from "./service/client.service";
import {DataService} from "../shared/service/data.service";
import {SharedModule} from "../shared/shared.module";
import {BreakComponent} from "./component/break/break.component";
import {GameService} from "../shared/service/game.service";
import {ResultService} from "../shared/service/result.service";
import { ResultComponent } from './component/result/result.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        MainComponent,
        BreakComponent,
        ResultComponent
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
