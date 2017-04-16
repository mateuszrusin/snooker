import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppTranslateModule} from "../app.translate";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        AppTranslateModule
    ],
    exports: [
        CommonModule,
        AppTranslateModule
    ]
})
export class SharedModule {
}
