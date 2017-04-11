import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './component/main/main.component';
import {AppTranslateModule} from "../app.translate";
import {ClientService} from "./service/client.service";
import {DataService} from "../shared/service/data.service";
import {GameService} from "./service/game.service";

@NgModule({
    imports: [
        CommonModule,
        AppTranslateModule,
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        DataService,
        GameService,
        ClientService,
    ],
})
export class DisplayModule {
}
