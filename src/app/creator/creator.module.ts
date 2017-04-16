import {NgModule} from '@angular/core';
import {MainComponent} from "./component/main/main.component";
import {PlayerComponent} from "./component/player/player.component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {PanelModule} from "primeng/components/panel/panel";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {QRCodeModule} from 'angular2-qrcode';

@NgModule({
    imports: [
        SharedModule,
        QRCodeModule,
        FormsModule,
        FieldsetModule,
        FileUploadModule,
        PanelModule,
    ],
    declarations: [
        MainComponent,
        PlayerComponent
    ]
})
export class CreatorModule {
}
