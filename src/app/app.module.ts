///<reference path="../../node_modules/primeng/components/button/button.d.ts"/>
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./shared/component/app.component";
import {AppRoutingModule} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CreatorModule} from "./creator/creator.module";
import {ControlModule} from "./control/control.module";
import {AppTranslateModule} from "./app.translate";
import {DisplayModule} from "./display/display.module";
import {SharedModule} from "./shared/shared.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppTranslateModule,
        SharedModule,
        CreatorModule,
        ControlModule,
        DisplayModule
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
