import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {ControlsComponent} from "./component/controls/controls.component";
import {ResultComponent} from "./component/result/result.component";
import {MainComponent} from "./creator/component/main/main.component";

const ROUTES: Routes = [
    { path: 'control/:id', component: ControlsComponent },
    { path: 'result/:id', component: ResultComponent },
    { path: '', component: MainComponent }
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