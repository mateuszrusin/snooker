import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {PlayersComponent} from "./component/players/players.component";
import {BreakComponent} from "./component/break/break.component";
import {ControlsComponent} from "./component/controls/controls.component";
import {PlayersService} from "./service/players/players.service";
import {Break} from "./service/break/break.service";
import {BallsService} from "./service/balls/balls.service";
import {FoulComponent} from "./component/foul/foul.component";
import {SplitButtonModule, ButtonModule} from "primeng/primeng";
import {AppRoutingModule} from "./app.routes";
import {ConfigService} from "./service/config/config.service";
import {ResultComponent} from "./component/result/result.component";
import { PreviewComponent } from './component/preview/preview.component';

@NgModule({
    declarations: [
        AppComponent,
        PlayersComponent,
        BreakComponent,
        ControlsComponent,
        FoulComponent,
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
        PlayersService,
        Break,
        BallsService,
        ConfigService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
