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
import {SplitButtonModule, ButtonModule} from "primeng/primeng";
import {AppRoutingModule} from "./app.routes";
import {Config} from "./service/config/config.service";
import {ResultComponent} from "./component/result/result.component";
import {PreviewComponent} from "./component/preview/preview.component";
import {StateService} from "./service/state/state.service";
import {Result} from "./service/result/result.service";
import {GameComponent} from "./component/game/game.component";
import {Frame} from "./service/frame/frame.service";

export function loader(config: Config) {
    return function() {
        return config.load();
    };
};

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        BreakComponent,
        ControlsComponent,
        ResultComponent,
        PreviewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SplitButtonModule,
        ButtonModule
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
