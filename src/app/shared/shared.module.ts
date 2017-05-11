import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppTranslateModule} from "../app.translate";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponent} from "./component/menu/menu.component";
import {ThemeService} from "./service/theme.service";
import {TieredMenuModule} from "primeng/components/tieredmenu/tieredmenu";
import {ButtonModule} from "primeng/components/button/button";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AppTranslateModule,
        TieredMenuModule,
        ButtonModule
    ],
    declarations: [
        MenuComponent
    ],
    providers: [
        ThemeService
    ],
    exports: [
        CommonModule,
        AppTranslateModule,
        MenuComponent
    ]
})
export class SharedModule {
}
