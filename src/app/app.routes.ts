import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {MainComponent as CreatorComponent} from "./creator/component/main/main.component";
import {MainComponent as ControlComponent} from "./control/component/main/main.component";
import {MainComponent as DisplayComponent} from "./display/component/main/main.component";

const ROUTES: Routes = [
    { path: 'control/:id', component: ControlComponent },
    { path: 'display/:id', component: DisplayComponent },
    { path: '', component: CreatorComponent }
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