import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./component/main/main.component";
import {PlayerComponent} from "./component/player/player.component";
import {QRCodeComponent} from "ng2-qrcode";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {PanelModule} from "primeng/components/panel/panel";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FieldsetModule,
        FileUploadModule,
        PanelModule,
    ],
    declarations: [
        MainComponent,
        PlayerComponent,
        QRCodeComponent
    ],
    exports: [
        QRCodeComponent
    ]
})
export class CreatorModule {
}
