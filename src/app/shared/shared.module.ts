import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataService} from "./service/data.service";
import {ResultService} from "./service/result.service";
import {BreakService} from "./service/break.service";

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        DataService,
        ResultService,
        BreakService
    ],
})
export class SharedModule {
}
