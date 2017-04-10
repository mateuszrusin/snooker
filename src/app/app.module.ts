///<reference path="../../node_modules/primeng/components/button/button.d.ts"/>
import {BrowserModule} from "@angular/platform-browser";
import {NgModule, APP_INITIALIZER} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {BreakComponent} from "./component/break/break.component";
import {Players} from "./service/players/players.service";
import {Break} from "./control/service/break.service";
import {BallsService} from "./service/balls/balls.service";
import {AppRoutingModule} from "./app.routes";
import {Config} from "./service/config/config.service";
import {ResultComponent} from "./component/result/result.component";
import {GameComponent} from "./component/game/game.component";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {ButtonModule} from "primeng/components/button/button";
import {InplaceModule} from "primeng/components/inplace/inplace";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {PanelModule} from "primeng/components/panel/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CreatorModule} from "./creator/creator.module";
import {ControlModule} from "./control/control.module";
import {AppTranslateModule} from "./app.translate";
import {DisplayModule} from "./display/display.module";

export function loader(config: Config) {
    return function() {
        //return config.load();
    }
}

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        BreakComponent,
        ResultComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AppTranslateModule,
        SplitButtonModule,
        InplaceModule,
        FieldsetModule,
        FileUploadModule,
        PanelModule,
        CreatorModule,
        ControlModule,
        DisplayModule
    ],
    providers: [
        Config,
        { provide: APP_INITIALIZER, useFactory: loader , deps: [Config], multi: true },
        Players,
        Break,
        BallsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
