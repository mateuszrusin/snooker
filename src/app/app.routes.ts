import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const ROUTES: Routes = [
    { path: 'control/:id', loadChildren: './control/control.module#ControlModule' },
    { path: 'display/:id', loadChildren: './display/display.module#DisplayModule' },
    { path: '', loadChildren: './creator/creator.module#CreatorModule' }
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