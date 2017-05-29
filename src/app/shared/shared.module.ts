import {NgModule} from "@angular/core";
import {AppTranslateModule} from "../app.translate";
import {FormsModule} from "@angular/forms";
import {MenuComponent} from "./component/menu/menu.component";
import {ThemeService} from "./service/theme.service";
import {TieredMenuModule} from "primeng/components/tieredmenu/tieredmenu";
import {ButtonModule} from "primeng/components/button/button";
import {GameService} from "./service/game.service";
import {BreakService} from "./service/break.service";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [
        HttpModule,
        FormsModule,
        AppTranslateModule,
        TieredMenuModule,
        ButtonModule
    ],
    declarations: [
        MenuComponent
    ],
    providers: [
        BreakService,
        GameService,
        ThemeService
    ],
    exports: [
        CommonModule,
        AppTranslateModule,
        MenuComponent
    ]
})
export class SharedModule {}
