import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    {
       path: "by-capital",
       component: ByCapitalComponent
    },
    {
        path: "by-country",
        component: ByCountryComponent
    },
    {
        path: "by-region",
        component: ByRegionComponent
    },
    {
        path: "id/:id",
        component: ByIdComponent
    }
]


@NgModule({
    imports: [
        RouterModule.forChild( routes )
    ],
    exports: [
        RouterModule
    ],
})
export class CountriesRoutingModule { }
