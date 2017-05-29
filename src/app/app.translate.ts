import {NgModule} from "@angular/core";
import {LANG} from "./shared/data/lang";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {Observable} from "rxjs/Observable";

export class LocalLoader implements TranslateLoader {
    getTranslation(lang: string): Observable<any> {
        return Observable.of(LANG[lang]);
    }
}

@NgModule({
    imports: [
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: LocalLoader
            }
        })
    ],
    exports: [
        TranslateModule
    ]
})
export class AppTranslateModule {}
