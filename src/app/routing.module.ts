import { HomeComponent } from './shared/pages/home/home.component';
import { Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// import { CountriesComponent } from './shared/pages/countries/countries.component';

const routes : Routes = [
    // {
    //     path: "",
    //     component: HomeComponent
    // },
    {
        path: "countries",
        loadChildren: () => import("./countries/countries.module")
            .then( module => module.CountriesModule )
    },
    {
        path: "**",
        redirectTo: "/countries/by-country"
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