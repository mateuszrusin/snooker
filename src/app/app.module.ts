import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
