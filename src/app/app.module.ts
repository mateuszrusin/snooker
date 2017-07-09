import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./component/app/app.component";
import {BreakComponent} from "./component/break/break.component";
import {ControlsComponent} from "./component/controls/controls.component";
import {Break} from "./service/break/break.service";
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
import {StateComponent} from "./component/state/state.component";
import {LangComponent} from "./component/lang/lang.component";
import {SplitButtonModule} from "primeng/components/splitbutton/splitbutton";
import {ButtonModule} from "primeng/components/button/button";
import { SettingsComponent } from './component/settings/settings.component';
import {DialogModule} from "primeng/components/dialog/dialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {SpinnerModule} from "primeng/components/spinner/spinner";
import { FactorComponent } from './component/factor/factor.component';

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
        StateComponent,
        LangComponent,
        SettingsComponent,
        FactorComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppRoutingModule,
        AppTranslateModule,
        SplitButtonModule,
        ButtonModule,
        InplaceModule,
        DialogModule,
        TabViewModule,
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
