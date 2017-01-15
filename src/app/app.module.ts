import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./component/app/app.component";
import {PlayersComponent} from "./component/players/players.component";
import {BreakComponent} from "./component/break/break.component";
import {ControlsComponent} from "./component/controls/controls.component";
import {PlayersService} from "./service/players/players.service";
import {ActivePlayerService} from "./service/active-player/active-player.service";
import {BreakService} from "./service/break/break.service";
import {BallsService} from "./service/balls/balls.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    BreakComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
      PlayersService,
      ActivePlayerService,
      BreakService,
      BallsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
