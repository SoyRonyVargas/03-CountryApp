import { HomeComponent } from './shared/pages/home/home.component';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes : Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "**",
        redirectTo: "/"
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }