import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './component/main/main.component';
import {AppTranslateModule} from "../app.translate";
import {ClientService} from "./service/client.service";
import {DataService} from "../shared/service/data.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AppTranslateModule,
    ],
    declarations: [
        MainComponent
    ],
    providers: [
        DataService,
        ClientService,
    ]
})
export class DisplayModule {
}
