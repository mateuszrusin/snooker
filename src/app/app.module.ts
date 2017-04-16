///<reference path="../../node_modules/primeng/components/button/button.d.ts"/>
import {NgModule} from "@angular/core";
import {AppComponent} from "./shared/component/app.component";
import {AppRoutingModule} from "./app.routes";
import {CreatorModule} from "./creator/creator.module";
import {ControlModule} from "./control/control.module";
import {DisplayModule} from "./display/display.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        CreatorModule,
        ControlModule,
        DisplayModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
