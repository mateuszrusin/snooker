import {NgModule} from "@angular/core";
import {MainComponent} from "./component/main/main.component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {FileUploadModule} from "primeng/components/fileupload/fileupload";
import {PanelModule} from "primeng/components/panel/panel";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {QRCodeModule} from "angular2-qrcode";
import {UserComponent} from "./component/user/user.component";
import {SpinnerModule} from "primeng/components/spinner/spinner";
import {BusyModule} from "angular2-busy";
import {DialogModule} from "primeng/components/dialog/dialog";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        SharedModule,
        QRCodeModule,
        FormsModule,
        FieldsetModule,
        FileUploadModule,
        PanelModule,
        SpinnerModule,
        BusyModule,
        DialogModule,
        RouterModule.forChild([{ path: '', component: MainComponent }])
    ],
    declarations: [
        MainComponent,
        UserComponent
    ]
})
export class CreatorModule {
}
