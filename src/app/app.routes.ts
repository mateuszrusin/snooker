import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const ROUTES: Routes = [
    { path: 'control/:id', loadChildren: () => import('./control/control.module').then(m => m.ControlModule) },
    { path: 'display/:id', loadChildren: () => import('./display/display.module').then(m => m.DisplayModule) },
    { path: '', loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule) }
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