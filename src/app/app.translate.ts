import {NgModule} from "@angular/core";
import {LANG} from "./data/lang";
import {TranslateLoader, TranslateModule} from "ng2-translate";
import {Observable} from "rxjs";

export class LocalLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return Observable.of(LANG[lang]);
    }
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useClass: LocalLoader
        })
    ],
    exports: [
        TranslateModule
    ]
})
export class AppTranslateModule {}
