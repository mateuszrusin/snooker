import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {ControlsComponent} from "./component/controls/controls.component";
import {PreviewComponent} from "./component/preview/preview.component";
import {ResultComponent} from "./component/result/result.component";

const ROUTES: Routes = [
    { path: 'control/:id', component: ControlsComponent },
    { path: 'result/:id', component: ResultComponent },
    { path: '', component: PreviewComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}