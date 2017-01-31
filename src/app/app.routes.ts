import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {GameComponent} from "./component/game/game.component";

const ROUTES: Routes = [
    { path: '', component: GameComponent }
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
