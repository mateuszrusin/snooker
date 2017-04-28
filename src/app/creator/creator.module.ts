import {NgModule} from '@angular/core';
import {MainComponent} from "./component/main/main.component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {PanelModule} from "primeng/components/panel/panel";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {QRCodeModule} from 'angular2-qrcode';
import { UserComponent } from './component/user/user.component';
import {AutoCompleteModule, SpinnerModule} from "primeng/primeng";

@NgModule({
    imports: [
        SharedModule,
        QRCodeModule,
        FormsModule,
        FieldsetModule,
        FileUploadModule,
        PanelModule,
        SpinnerModule,
        AutoCompleteModule
    ],
    declarations: [
        MainComponent,
        UserComponent
    ]
})
export class CreatorModule {
}
