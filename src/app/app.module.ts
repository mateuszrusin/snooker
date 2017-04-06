///<reference path="../../node_modules/primeng/components/button/button.d.ts"/>
import {BrowserModule} from "@angular/platform-browser";
import {NgModule, APP_INITIALIZER} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {BreakComponent} from "./component/break/break.component";
import {ControlsComponent} from "./component/controls/controls.component";
import {Players} from "./service/players/players.service";
import {Break} from "./service/break/break.service";
import {BallsService} from "./service/balls/balls.service";
import {AppRoutingModule} from "./app.routes";
import {Config} from "./service/config/config.service";
import {ResultComponent} from "./component/result/result.component";
import {PreviewComponent} from "./component/preview/preview.component";
import {StateService} from "./service/state/state.service";
import {Result} from "./service/result/result.service";
import {GameComponent} from "./component/game/game.component";
import {Frame} from "./service/frame/frame.service";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {ButtonModule} from "primeng/components/button/button";
import {InplaceModule} from "primeng/components/inplace/inplace";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {PanelModule} from "primeng/components/panel/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PlayerComponent } from './component/player/player.component';
import {QRCodeComponent} from "ng2-qrcode";

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
        ControlsComponent,
        ResultComponent,
        PreviewComponent,
        PlayerComponent,
        QRCodeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SplitButtonModule,
        ButtonModule,
        InplaceModule,
        FieldsetModule,
        FileUploadModule,
        PanelModule
    ],
    providers: [
        Config,
        { provide: APP_INITIALIZER, useFactory: loader , deps: [Config], multi: true },
        Players,
        Break,
        BallsService,
        StateService,
        Result,
        Frame
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
