import {BrowserModule} from "@angular/platform-browser";
import {NgModule, APP_INITIALIZER} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {BreakComponent} from "./component/break/break.component";
import {ControlsComponent} from "./component/controls/controls.component";
import {Break} from "./service/break/break.service";
import {SplitButtonModule, ButtonModule} from "primeng/primeng";
import {AppRoutingModule} from "./app.routes";
import {Config} from "./service/config/config.service";
import {Result} from "./service/result/result.service";
import {GameComponent} from "./component/game/game.component";
import {InplaceModule} from "primeng/components/inplace/inplace";
import {PlayerComponent} from "./component/player/player.component";
import {HeaderComponent} from "./component/header/header.component";
import {FrameComponent} from "./component/frame/frame.component";
import {RefereeComponent} from "./component/referee/referee.component";
import {Game} from "./service/game/game.service";

export function loader(config: Config) {
    return function() {
        return config.load();
    }
}

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        BreakComponent,
        ControlsComponent,
        PlayerComponent,
        HeaderComponent,
        FrameComponent,
        RefereeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        SplitButtonModule,
        ButtonModule,
        InplaceModule
    ],
    providers: [
        Config,
        { provide: APP_INITIALIZER, useFactory: loader , deps: [Config], multi: true },
        Break,
        Game,
        Result,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
