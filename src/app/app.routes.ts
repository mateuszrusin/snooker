import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {ControlsComponent} from "./component/controls/controls.component";
import {PreviewComponent} from "./component/preview/preview.component";
import {ResultComponent} from "./component/result/result.component";

const appRoutes: Routes = [
    { path: 'control', component: ControlsComponent },
    { path: 'result', component: ResultComponent },
    { path: '', component: PreviewComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}