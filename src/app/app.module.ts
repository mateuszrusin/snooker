import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
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
import {AppTranslateModule} from "./app.translate";
import {TieredMenuModule} from "primeng/components/tieredmenu/tieredmenu";
import {SpinnerModule} from "primeng/components/spinner/spinner";
import { EditorComponent } from './component/editor/editor.component';

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        BreakComponent,
        ControlsComponent,
        PlayerComponent,
        HeaderComponent,
        FrameComponent,
        RefereeComponent,
        EditorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        AppTranslateModule,
        SplitButtonModule,
        ButtonModule,
        InplaceModule,
        TieredMenuModule,
        SpinnerModule
    ],
    providers: [
        Config,
        Break,
        Game,
        Result
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
